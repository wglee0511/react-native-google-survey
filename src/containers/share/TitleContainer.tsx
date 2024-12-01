import React, { PropsWithChildren } from "react";

import { View } from "react-native";

import { filter, find, isNil, map } from "lodash";
import { useSetRecoilState } from "recoil";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import PressableIcon from "@/components/Icon/PressableIcon";
import Switch from "@/components/Switch";
import { questionState } from "@/store/question/atom";
import { COLORS } from "@/theme/colors";
import globalStyles from "@/theme/globalStyles";
import { RADIUS } from "@/theme/radius";

const TitleContainer = ({
  isFocus = false,
  isTitle = false,
  hasRequired = false,
  required = false,
  isEdit = false,
  id = "",
  children
}: PropsWithChildren<{
  isFocus?: boolean;
  isTitle?: boolean;
  hasRequired?: boolean;
  required?: boolean;
  id?: string;
  isEdit?: boolean;
}>) => {
  const setQuestion = useSetRecoilState(questionState);
  const onPressSwitch = () => {
    setQuestion((prev) => ({
      ...prev,
      questionList: map(prev.questionList, (value) => {
        if (value.id === id) {
          return { ...value, required: !required };
        }

        return value;
      })
    }));
  };

  const onPressCopy = () => {
    setQuestion((prev) => {
      const currentQuestion = find(prev.questionList, (value) => value.id === id);

      if (isNil(currentQuestion)) {
        return prev;
      }

      return {
        ...prev,
        questionList: [
          ...prev.questionList,
          { ...currentQuestion, id: `${currentQuestion?.type} ${prev.questionList.length}` }
        ]
      };
    });
  };

  const onPressDelete = () => {
    setQuestion((prev) => ({
      ...prev,
      questionList: filter(prev.questionList, (value) => value.id !== id)
    }));
  };

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: COLORS.white,
        overflow: "hidden",
        borderRadius: RADIUS.base
      }}
    >
      {isEdit && !isTitle && (
        <View
          style={{
            position: "absolute",
            right: 4,
            top: 4,
            zIndex: 10
          }}
        >
          <PressableIcon
            icon="Close"
            size={24}
            color={COLORS.black}
            paddingSize="base"
            onPress={onPressDelete}
          />
        </View>
      )}
      {isTitle && <Divider vertical={20} horizontal="100%" backgroundColor={COLORS.red400} />}
      <View style={[globalStyles.rowAlignCenterContainer]}>
        <Divider
          horizontal={5}
          vertical="100%"
          backgroundColor={isFocus && isEdit ? COLORS.yellow200 : "transparent"}
        />
        <View style={globalStyles.defaultFlexContainer}>
          {children}
          {hasRequired && isFocus && isEdit && (
            <View
              style={[
                {
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  flexDirection: "row",
                  justifyContent: "flex-end"
                }
              ]}
            >
              <Switch isActive={required} onPress={onPressSwitch} label="필수" />
              <Divider horizontal={10} />
              <Button
                fontSize={16}
                fontWeight="600"
                width="15%"
                height={30}
                buttonColor={COLORS.black}
                onPress={onPressCopy}
              >
                복사
              </Button>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default TitleContainer;
