import React from "react";

import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

import { IconStyleProps } from "../../type";

const ArrowRight = ({ size, color }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <G clipPath="url(#clip0_932_1577)">
      <Path
        d="M16.172 11L10.808 5.636L12.222 4.222L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
        fill={color || "#181A20"}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_932_1577">
        <Rect width="24" height="24" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default ArrowRight;
