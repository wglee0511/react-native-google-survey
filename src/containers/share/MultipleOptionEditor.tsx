import React, { useCallback, useMemo } from "react";

import { Pressable } from "react-native";

import { filter, includes, map } from "lodash";
import { useSetRecoilState } from "recoil";

import useOnFocusQuestion from "@/hooks/useOnFocusQuestion";

import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Divider from "@/components/Divider";
import InputField from "@/components/InputField";
import Radio from "@/components/Radio";
import Text from "@/components/Text";
import { questionState } from "@/store/question/atom";
import { QuestionNameType, QuestionOptionType } from "@/store/question/type";
import { COLORS } from "@/theme/colors";
import globalStyles from "@/theme/globalStyles";

const MultipleOptionEditor = ({
  parentId,
  isFocus,
  isEdit,
  id,
  type,
  text,
  selectedOptionId
}: {
  parentId: string;
  isFocus?: boolean;
  isEdit?: boolean;
  selectedOptionId: string[];
  type: QuestionNameType;
} & QuestionOptionType) => {
  const { onFocusContainer } = useOnFocusQuestion(parentId);
  const setQuestion = useSetRecoilState(questionState);

  const isRadio = useMemo(() => type === "MULTIPLE", [type]);
  const isSelected = useMemo(() => includes(selectedOptionId, id), [id, selectedOptionId]);

  const onChangeQuestion = useCallback(
    (newText: string) => {
      setQuestion((prev) => ({
        ...prev,
        questionList: map(prev.questionList, (value) => {
          if (value.id === parentId) {
            return {
              ...value,
              options: map(value.options, (option) => {
                if (option.id === id) {
                  return {
                    ...option,
                    text: newText
                  };
                }
                return option;
              })
            };
          }
          return value;
        })
      }));
    },
    [id, parentId, setQuestion]
  );

  const onPressDelete = () => {
    setQuestion((prev) => ({
      ...prev,
      questionList: map(prev.questionList, (value) => {
        if (value.id === parentId) {
          return {
            ...value,
            options:
              value?.options?.length === 1
                ? value.options
                : filter(value.options, (option) => option.id !== id)
          };
        }
        return value;
      })
    }));
  };

  const onPressOption = () => {
    setQuestion((prev) => ({
      ...prev,
      questionList: map(prev.questionList, (value) => {
        if (value.id === parentId) {
          if (isRadio) {
            return {
              ...value,
              selectedOptionId: [id]
            };
          }
          const idList = isSelected
            ? filter(value.selectedOptionId, (idValue) => idValue !== id)
            : [...value.selectedOptionId, id];
          return {
            ...value,
            selectedOptionId: idList
          };
        }
        return value;
      })
    }));
  };

  return (
    <Pressable
      style={({ pressed }) => [
        pressed && { opacity: 0.7 },
        { width: "100%" },
        globalStyles.rowAlignCenterContainer
      ]}
      onPress={() => {
        if (!isEdit) {
          onPressOption();
          return;
        }
        onFocusContainer();
      }}
    >
      {isRadio ? (
        <Radio size={24} selected={isSelected} backgroundColor={COLORS.red300} />
      ) : (
        <Checkbox
          size={24}
          checked={isSelected}
          backgroundColor={COLORS.red300}
          onPress={() => {}}
        />
      )}
      <Divider horizontal={5} />
      {isFocus ? (
        <InputField
          value={text}
          fontSize={16}
          fontWeight="400"
          width="60%"
          disabled={!isEdit}
          onFocus={!isEdit ? () => {} : onFocusContainer}
          onChangeText={onChangeQuestion}
        />
      ) : (
        <Text fontSize={14} fontWeight="400" color={COLORS.black}>
          {text}
        </Text>
      )}
      {isFocus && <Divider horizontal={20} />}
      {isFocus && (
        <Button
          fontSize={15}
          fontWeight="600"
          width="20%"
          height={40}
          buttonColor={COLORS.red400}
          onPress={onPressDelete}
        >
          삭제
        </Button>
      )}
    </Pressable>
  );
};

export default MultipleOptionEditor;
