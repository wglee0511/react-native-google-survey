import React, { useCallback, useMemo } from "react";

import { Pressable } from "react-native";

import { useRecoilState } from "recoil";

import useOnFocusQuestion from "@/hooks/useOnFocusQuestion";

import TitleContainer from "../share/\bTitleContainer";

import Divider from "@/components/Divider";
import InputField from "@/components/InputField";
import Text from "@/components/Text";
import { formState } from "@/store/form/atom";
import { questionState } from "@/store/question/atom";
import { COLORS } from "@/theme/colors";

const HomeTitleEditor = ({ isPreview = false }: { isPreview?: boolean }) => {
  const [question, setQuestion] = useRecoilState(questionState);
  const [form, setForm] = useRecoilState(formState);
  const isFocus = useMemo(() => form.focusId === question.id, [form.focusId, question.id]);

  const { onFocusContainer } = useOnFocusQuestion(question.id);

  const onChangeTitle = useCallback(
    (text: string) => {
      setQuestion((prev) => ({ ...prev, title: text }));
    },
    [setQuestion]
  );

  const onChangeDescription = useCallback(
    (text: string) => {
      setQuestion((prev) => ({ ...prev, description: text }));
    },
    [setQuestion]
  );

  return (
    <TitleContainer isTitle isEdit={!isPreview} isFocus={isFocus}>
      <Pressable
        style={({ pressed }) => [
          pressed && { opacity: 0.7 },
          {
            width: "100%",
            backgroundColor: COLORS.white,
            overflow: "hidden",
            paddingHorizontal: 25,
            paddingVertical: 15,
            gap: 5
          }
        ]}
        disabled={isPreview}
        onPress={() => {
          setForm({ focusId: question.id });
        }}
      >
        {isPreview || !isFocus ? (
          <Text fontSize={25} fontWeight="600" color={COLORS.black}>
            {question.title}
          </Text>
        ) : (
          <InputField
            value={question.title}
            fontSize={25}
            fontWeight="600"
            width="100%"
            onFocus={isPreview ? () => {} : onFocusContainer}
            onChangeText={onChangeTitle}
          />
        )}
        <Divider vertical={5} />

        {!isFocus ? (
          <Text fontSize={14} fontWeight="400" color={COLORS.black}>
            {question.description || (isPreview ? "" : "설문지 설명")}
          </Text>
        ) : (
          <InputField
            value={question.description}
            fontSize={14}
            fontWeight="400"
            width="100%"
            disabled={isPreview}
            onFocus={isPreview ? () => {} : onFocusContainer}
            onChangeText={onChangeDescription}
            placeholder="설문지 설명"
          />
        )}
        {isPreview && (
          <Text fontSize={12} fontWeight="500" color={COLORS.red400}>
            * 표시는 필수 질문입니다.
          </Text>
        )}
      </Pressable>
    </TitleContainer>
  );
};

export default HomeTitleEditor;
