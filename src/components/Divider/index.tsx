import React from "react";

import { StyleProp, View, ViewStyle } from "react-native";

import { DividerProps } from "./type";

/**
 * @component
 * margin 컴포넌트

 * @example
 * <Divider
 *   horizontal={10}                 // optional
 *   vertical={10}                   // optional
 *   backgroundColor={COLORS.white}  // optional
 * />
 */
const Divider = ({
  horizontal = 1,
  vertical = 1,
  backgroundColor = "transparent"
}: DividerProps) => (
  <View
    style={
      {
        width: horizontal,
        height: vertical,
        backgroundColor
      } as StyleProp<ViewStyle>
    }
  />
);

export default Divider;
