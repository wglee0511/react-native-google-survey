import React from "react";

import { Path, Svg } from "react-native-svg";

import { IconStyleProps } from "../../type";

const Close = ({ size, color }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 10.586L16.95 5.636L18.364 7.05L13.414 12L18.364 16.95L16.95 18.364L12 13.414L7.05 18.364L5.636 16.95L10.586 12L5.636 7.05L7.05 5.636L12 10.586Z"
      fill={color || "#181A20"}
    />
  </Svg>
);

export default Close;
