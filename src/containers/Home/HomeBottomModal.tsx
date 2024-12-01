import React, { useCallback, useMemo } from "react";

import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { isNil, map } from "lodash";
import { useRecoilState } from "recoil";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import {
  QUESTION_LIST_TEMPLATE,
  QUESTION_TYPE_LIST,
  QUESTION_TYPE_LIST_TEXT
} from "@/constants/constants";
import { modalState } from "@/store/modal/atom";
import { questionState } from "@/store/question/atom";
import { COLORS } from "@/theme/colors";

const HomeBottomModal = ({
  bottomSheetModalRef
}: {
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
}) => {
  const [modal, setModal] = useRecoilState(modalState);
  const [question, setQuestion] = useRecoilState(questionState);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        setModal({ isAddQuestionBottomSheet: false });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setModal, modal]
  );

  const renderTypes = useMemo(
    () =>
      map(QUESTION_TYPE_LIST, (value) => {
        const template = { ...QUESTION_LIST_TEMPLATE[value] };
        const templateId = `${value} ${question.questionList.length}`;

        template.id = templateId;

        if (!isNil(template?.options)) {
          template.options = [
            {
              id: `${value} ${question.questionList.length} OPTION ${template?.options?.length}`,
              text: template?.options[0]?.text
            }
          ];
        }
        return (
          <Button
            fontSize={17}
            fontWeight="500"
            key={value}
            width="90%"
            height={50}
            buttonColor={COLORS.black}
            onPress={() => {
              if (bottomSheetModalRef.current !== null) {
                bottomSheetModalRef.current?.dismiss();
              }
              setQuestion((prev) => ({
                ...prev,
                questionList: [...prev.questionList, template]
              }));
            }}
          >
            {QUESTION_TYPE_LIST_TEXT[value]}
          </Button>
        );
      }),
    [bottomSheetModalRef, question, setQuestion]
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={["25%", "65%"]}
      onChange={handleSheetChanges}
    >
      <BottomSheetView style={{ flex: 1, alignItems: "center", gap: 10 }}>
        <Divider vertical={20} />
        {renderTypes}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default HomeBottomModal;
