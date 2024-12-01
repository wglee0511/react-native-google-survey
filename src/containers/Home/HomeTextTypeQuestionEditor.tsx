import React, { useCallback, useMemo } from "react";

import { Pressable } from "react-native";

import { map } from "lodash";
import { useRecoilState, useSetRecoilState } from "recoil";

import useOnFocusQuestion from "@/hooks/useOnFocusQuestion";

import TitleContainer from "../share/\bTitleContainer";

import Divider from "@/components/Divider";
import InputField from "@/components/InputField";
import Text from "@/components/Text";
import { formState } from "@/store/form/atom";
import { questionState } from "@/store/question/atom";
import { QuestionListType } from "@/store/question/type";
import { COLORS } from "@/theme/colors";

const HomeTextTypeQuestionEditor = ({
  id,
  questionText,
  required,
  type,
  answer,
  isPreview = false
}: { isPreview?: boolean } & QuestionListType) => {
  const [form, setForm] = useRecoilState(formState);
  const setQuestion = useSetRecoilState(questionState);
  const { onFocusContainer } = useOnFocusQuestion(id);

  const isFocus = useMemo(() => form.focusId === id, [form.focusId, id]);

  const onChangeQuestion = useCallback(
    (text: string) => {
      setQuestion((prev) => ({
        ...prev,
        questionList: map(prev.questionList, (value) => {
          if (value.id === id) {
            return {
              ...value,
              questionText: text
            };
          }
          return value;
        })
      }));
    },
    [id, setQuestion]
  );

  const onChangeAnswer = useCallback(
    (text: string) => {
      setQuestion((prev) => ({
        ...prev,
        questionList: map(prev.questionList, (value) => {
          if (value.id === id) {
            return {
              ...value,
              answer: text
            };
          }
          return value;
        })
      }));
    },
    [id, setQuestion]
  );

  return (
    <TitleContainer isFocus={isFocus} hasRequired isEdit={!isPreview} required={required} id={id}>
      <Pressable
        style={({ pressed }) => [
          pressed && { opacity: 0.7 },
          {
            width: "100%",
            backgroundColor: COLORS.white,
            overflow: "hidden",
            paddingHorizontal: 25,
            paddingVertical: 15
          }
        ]}
        onPress={() => {
          if (isPreview) {
            return;
          }
          setForm({ focusId: id });
        }}
      >
        {isFocus ? (
          <InputField
            value={questionText}
            fontSize={18}
            fontWeight="600"
            width="100%"
            onFocus={isPreview ? () => {} : onFocusContainer}
            onChangeText={onChangeQuestion}
          />
        ) : (
          <Text fontSize={15} fontWeight="400" color={COLORS.black}>
            {questionText}{" "}
            {required && (
              <Text fontSize={15} fontWeight="400" color={COLORS.red400}>
                *
              </Text>
            )}
          </Text>
        )}
        <Divider vertical={10} />
        {isPreview || isFocus ? (
          <InputField
            value={answer}
            fontSize={12}
            fontWeight="600"
            disabled={!isPreview}
            width={type === "SHORT" ? "50%" : "100%"}
            onFocus={isPreview ? () => {} : onFocusContainer}
            placeholder={(() => {
              const editPlaceholder = type === "SHORT" ? "단답형 테스트" : "장문형 테스트";
              return isPreview ? "내답변" : editPlaceholder;
            })()}
            onChangeText={onChangeAnswer}
          />
        ) : (
          <Text fontSize={12} fontWeight="400" color={COLORS.black}>
            {(() => {
              const tempText = type === "SHORT" ? "단답형 테스트" : "장문형 테스트";
              return isPreview ? answer : tempText;
            })()}
          </Text>
        )}
      </Pressable>
    </TitleContainer>
  );
};

export default HomeTextTypeQuestionEditor;
