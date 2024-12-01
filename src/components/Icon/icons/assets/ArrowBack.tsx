import React from "react";

import { Path, Svg } from "react-native-svg";

import { IconStyleProps } from "../../type";

const ArrowBack = ({ size, color }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 11H7.8L13.4 5.4L12 4L4 12L12 20L13.4 18.6L7.8 13H20V11Z"
      fill={color || "#181A20"}
    />
  </Svg>
);

export default ArrowBack;
