import React, { useMemo } from "react";

import { Pressable, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { map } from "lodash";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRecoilState } from "recoil";

import { NavigationProp } from "../type";

import Divider from "@/components/Divider";
import Icon from "@/components/Icon";
import HomeMultipleTypeQuestionEditor from "@/containers/Home/HomeMultipleTypeQuestionEditor";
import HomeTextTypeQuestionEditor from "@/containers/Home/HomeTextTypeQuestionEditor";
import HomeTitleEditor from "@/containers/Home/HomeTitleEditor";
import { questionState } from "@/store/question/atom";
import { COLORS } from "@/theme/colors";
import globalStyles from "@/theme/globalStyles";
import { RADIUS } from "@/theme/radius";

const Preview = () => {
  const navigation = useNavigation<NavigationProp>();
  const [question] = useRecoilState(questionState);

  const renderQuestionsList = useMemo(
    () =>
      map(question.questionList, (value) => {
        switch (value.type) {
          case "LONG":
          case "SHORT":
            return <HomeTextTypeQuestionEditor key={value.id} isPreview {...value} />;
          case "CHECKBOX":
          case "MULTIPLE":
            return <HomeMultipleTypeQuestionEditor key={value.id} isPreview {...value} />;

          default:
            return <HomeTextTypeQuestionEditor key={value.id} isPreview {...value} />;
        }
      }),
    [question.questionList]
  );

  return (
    <View style={[globalStyles.defaultFlexContainer]}>
      <KeyboardAwareScrollView contentContainerStyle={[{ flexGrow: 1 }]}>
        <View
          style={[
            globalStyles.defaultFlexContainer,
            globalStyles.alignCenter,
            { paddingVertical: 20, paddingHorizontal: 5, gap: 10 }
          ]}
        >
          <HomeTitleEditor isPreview />
          {renderQuestionsList}
          <Divider vertical={100} />
        </View>
      </KeyboardAwareScrollView>
      <Pressable
        style={({ pressed }) => [
          pressed && { opacity: 0.7 },
          {
            width: 50,
            height: 50,
            borderRadius: RADIUS.circle,
            backgroundColor: COLORS.red100,
            position: "absolute",
            bottom: 50,
            left: 20
          }
        ]}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon icon="ArrowBack" size={48} color={COLORS.red400} />
      </Pressable>
    </View>
  );
};

export default Preview;
