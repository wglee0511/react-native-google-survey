import React from "react";

import { Path, Rect, Svg } from "react-native-svg";

import { IconStyleProps } from "../../type";

const CheckboxDisabled = ({ size }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <Rect x="3" y="3" width="18" height="18" rx="2" fill="#BDC1C6" />
    <Path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="#DCDDDF" />
  </Svg>
);

export default CheckboxDisabled;
