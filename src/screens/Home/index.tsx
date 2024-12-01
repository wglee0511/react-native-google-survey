import React, { useCallback, useMemo, useRef } from "react";

import { Pressable, View } from "react-native";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { map } from "lodash";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useRecoilState, useSetRecoilState } from "recoil";

import { NavigationProp } from "../type";

import Button from "@/components/Button";
import Divider from "@/components/Divider";
import Icon from "@/components/Icon";
import HomeBottomModal from "@/containers/Home/HomeBottomModal";
import HomeMultipleTypeQuestionEditor from "@/containers/Home/HomeMultipleTypeQuestionEditor";
import HomeTextTypeQuestionEditor from "@/containers/Home/HomeTextTypeQuestionEditor";
import HomeTitleEditor from "@/containers/Home/HomeTitleEditor";
import { formState, initialFormState } from "@/store/form/atom";
import { modalState } from "@/store/modal/atom";
import { questionState } from "@/store/question/atom";
import { COLORS } from "@/theme/colors";
import globalStyles from "@/theme/globalStyles";
import { RADIUS } from "@/theme/radius";

const Home = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [modal, setModal] = useRecoilState(modalState);
  const [question] = useRecoilState(questionState);
  const setForm = useSetRecoilState(formState);
  const navigation = useNavigation<NavigationProp>();

  const onPressOpenModalButton = useCallback(() => {
    if (modal.isAddQuestionBottomSheet) {
      bottomSheetRef.current?.dismiss();
      setModal({ isAddQuestionBottomSheet: false });
    } else {
      bottomSheetRef.current?.present();
      setModal({ isAddQuestionBottomSheet: true });
    }
  }, [modal, setModal]);

  const renderQuestionsList = useMemo(
    () =>
      map(question.questionList, (value) => {
        switch (value.type) {
          case "LONG":
          case "SHORT":
            return <HomeTextTypeQuestionEditor key={value.id} {...value} />;
          case "CHECKBOX":
          case "MULTIPLE":
            return <HomeMultipleTypeQuestionEditor key={value.id} {...value} />;

          default:
            return <HomeTextTypeQuestionEditor key={value.id} {...value} />;
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
          <HomeTitleEditor />
          {renderQuestionsList}
          <Divider vertical={20} />
          <Button
            fontSize={20}
            fontWeight="500"
            width="50%"
            height={50}
            buttonColor={COLORS.black}
            backgroundColor={COLORS.white}
            onPress={() => {
              onPressOpenModalButton();
            }}
          >
            추가하기
          </Button>
          <Divider vertical={50} />
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
            right: 20
          }
        ]}
        onPress={() => {
          setForm(initialFormState);
          navigation.navigate("Preview");
        }}
      >
        <Icon icon="ArrowRight" size={48} color={COLORS.red400} />
      </Pressable>
      <HomeBottomModal bottomSheetModalRef={bottomSheetRef} />
    </View>
  );
};

export default Home;
