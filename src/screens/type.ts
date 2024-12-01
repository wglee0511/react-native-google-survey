import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Preview: undefined;
};

export type TabStackParamList = {};
export type RootStackNavigationProp = StackNavigationProp<RootStackParamList>;

export type NavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  RootStackNavigationProp
>;
