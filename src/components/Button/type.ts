import type { PressableProps, TextStyle } from "react-native";

import { RADIUS } from "@/theme/radius";

export interface ButtonProps extends PressableProps, Pick<TextStyle, "fontSize" | "fontWeight"> {
  /** Button 가로 길이 */
  width?: string | number;

  height?: string | number;

  divideSize?: number;

  /** 활성화 여부 */
  disabled?: boolean;

  /** Button 아이콘 */

  /** Button 모서리 */
  radius?: keyof typeof RADIUS;

  /** BottomButtonArea Children 여부 */
  bottomButton?: boolean;

  isRectButton?: boolean;

  isLoading?: boolean;
  buttonColor?: string;
  backgroundColor?: string;
}
