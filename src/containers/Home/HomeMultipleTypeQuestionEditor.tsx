import React, { useCallback, useMemo } from "react";

import { Pressable } from "react-native";

import { map } from "lodash";
import { useRecoilState } from "recoil";

import useOnFocusQuestion from "@/hooks/useOnFocusQuestion";

import TitleContainer from "../share/\bTitleContainer";
import MultipleOptionEditor from "../share/MultipleOptionEditor";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import InputField from "@/components/InputField";
import Text from "@/components/Text";
import { formState } from "@/store/form/atom";
import { questionState } from "@/store/question/atom";
import { QuestionListType } from "@/store/question/type";
import { COLORS } from "@/theme/colors";

const HomeMultipleTypeQuestionEditor = ({
  id,
  questionText,
  required,
  type,
  options = [],
  isPreview = false,
  selectedOptionId
}: { isPreview?: boolean } & QuestionListType) => {
  const [question, setQuestion] = useRecoilState(questionState);
  const [form, setForm] = useRecoilState(formState);
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

  const renderOptions = useMemo(
    () =>
      map(options, (value) => (
        <MultipleOptionEditor
          key={value.id}
          parentId={id}
          type={type}
          isEdit={!isPreview}
          isFocus={isFocus}
          selectedOptionId={selectedOptionId}
          {...value}
        />
      )),
    [id, isFocus, isPreview, options, selectedOptionId, type]
  );

  const addOption = () => {
    const option = {
      id: `${type} ${question.questionList.length} OPTION ${options.length + 1}`,
      text: `옵션 ${options.length + 1}`
    };

    setQuestion((prev) => ({
      ...prev,
      questionList: map(prev.questionList, (value) => {
        if (value.id === id) {
          return {
            ...value,
            options: [...options, option]
          };
        }
        return value;
      })
    }));
  };

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
            paddingVertical: 15,
            gap: 10
          }
        ]}
        disabled={isPreview}
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
            disabled={isPreview}
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
        {renderOptions}
        <Divider vertical={10} />
        {isFocus && (
          <Button
            fontSize={15}
            fontWeight="400"
            width="30%"
            height={35}
            buttonColor={COLORS.black}
            onPress={addOption}
          >
            옵션 추가
          </Button>
        )}
      </Pressable>
    </TitleContainer>
  );
};

export default HomeMultipleTypeQuestionEditor;
