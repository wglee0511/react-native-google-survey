import React from "react";

import { Pressable } from "react-native";

import * as Icons from "../icons";

import { PRESSABLE_ICON_PADDING } from "./constant";
import type { PressableIconProps } from "./type";

/**
 * @component
 * 컬러셋이 지정되지 않고 단순 클릭 가능한 아이콘 컴포넌트
 *
 * @props
 * paddingSize: none: 0, xs: 4, s: 10, base: 12, lg: 16, xl: 20, xxl: 24
 *
 * @example
 * <PressableIcon
 *   icon="Logo"    // required
 *   size={10}             // required
 *   paddingSize="base"    // requried
 *   color={COLORS.gray900}  // optional
 * />
 */
const PressableIcon = ({
  icon,
  size,
  color,
  paddingSize = "base",
  ...props
}: PressableIconProps) => {
  const IconComponent = Icons[icon];

  return (
    <Pressable
      style={({ pressed }) => [
        {
          paddingVertical: PRESSABLE_ICON_PADDING[paddingSize],
          paddingHorizontal: PRESSABLE_ICON_PADDING[paddingSize],
          opacity: pressed ? 0.7 : 1
        }
      ]}
      {...props}
    >
      <IconComponent size={size} color={color} />
    </Pressable>
  );
};

export default PressableIcon;
