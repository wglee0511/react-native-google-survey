import type { PressableProps } from "react-native";

import { IconProps } from "../type";

export type PressableIconPaddingSize = "none" | "xs" | "s" | "base" | "lg" | "xl" | "xxl";

export interface PressableIconProps extends IconProps, PressableProps {
  /** 아이콘 외부 패딩 영역 */
  paddingSize?: PressableIconPaddingSize;
}

export type PressableIconPadding = {
  [key in PressableIconPaddingSize]: number;
};
