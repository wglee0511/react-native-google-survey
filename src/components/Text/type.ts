/* eslint-disable @typescript-eslint/indent */
import type { TextProps as NativeTextProps, TextStyle, FlexStyle } from "react-native";

export interface TextProps extends NativeTextProps, TextStyle, Pick<FlexStyle, "flexShrink"> {}
