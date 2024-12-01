import React from "react";

import { Rect, Svg } from "react-native-svg";

import { IconStyleProps } from "../../type";

const UnCheckedbox = ({ size }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <Rect x="4" y="4" width="16" height="16" rx="1" stroke="#7C8694" strokeWidth="2" />
  </Svg>
);

export default UnCheckedbox;
