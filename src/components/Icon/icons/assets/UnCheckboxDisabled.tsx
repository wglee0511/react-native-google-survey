import React from "react";

import { G, Rect, Svg } from "react-native-svg";

import { IconStyleProps } from "../../type";

const UnCheckboxDisabled = ({ size }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <G opacity="0.38">
      <Rect x="4" y="4" width="16" height="16" rx="1" stroke="#7C8694" strokeWidth="2" />
    </G>
  </Svg>
);

export default UnCheckboxDisabled;
