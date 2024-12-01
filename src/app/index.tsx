import { useEffect } from "react";

import { View } from "react-native";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import * as ScreenOrientation from "expo-screen-orientation";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RecoilRoot } from "recoil";

import RootRouter from "@/screens/RootRouter";

import { ErrorBoundary } from "@/components/ErrorBoundary";

// if (__DEV__) {
//   import("../../ReactotronConfig").then(() => console.log("Reactotron Config"));
// }

export default function Index() {
  useEffect(() => {
    (async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    })();
  }, []);

  return (
    <RecoilRoot>
      <ErrorBoundary>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <View
              style={{
                flex: 1
              }}
            >
              <RootRouter />
            </View>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ErrorBoundary>
    </RecoilRoot>
  );
}
