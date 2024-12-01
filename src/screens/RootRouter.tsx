import React, { Suspense } from "react";

import { StatusBar, View } from "react-native";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Home from "./Home";
import Preview from "./Preview";
import { RootStackParamList } from "./type";

import { Spinner } from "@/components/Spinner";
import globalStyles from "@/theme/globalStyles";

const MainStack = createNativeStackNavigator<RootStackParamList>();

const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: globalStyles.defaultBackgroundColor.backgroundColor
  }
};

const RootRouter = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={[
        globalStyles.defaultFlexContainer,
        globalStyles.defaultBackgroundColor,
        { paddingTop: top }
      ]}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={globalStyles.defaultBackgroundColor.backgroundColor}
      />
      <Suspense fallback={<Spinner />}>
        <NavigationContainer independent theme={mainTheme}>
          <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
                animation: "default"
              }}
            />
            <MainStack.Screen
              name="Preview"
              component={Preview}
              options={{
                headerShown: false,
                animation: "default"
              }}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </Suspense>
    </View>
  );
};

export default RootRouter;
