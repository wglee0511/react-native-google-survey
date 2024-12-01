/* eslint-disable max-len */
import React from "react";

import { Path, Svg } from "react-native-svg";

import { IconStyleProps } from "../../type";

const Above = ({ size, color }: IconStyleProps) => (
  <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zm7.147 3.553a.75.75 0 011.05-.155c.728.54 1.607.852 2.553.852s1.825-.313 2.553-.852a.75.75 0 11.894 1.204A5.766 5.766 0 0112 17.75a5.766 5.766 0 01-3.447-1.148.75.75 0 01-.156-1.049z"
      fill={color}
    />
    <Path
      d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5zM10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5z"
      fill={color}
    />
  </Svg>
);

export default Above;
