import type { PressableProps } from "react-native";

export interface SwitchProps extends PressableProps {
  /** 활성화 여부 */
  isActive?: boolean;

  /** 라벨 */
  label?: string;

  /** disable 여부 */
  disabled?: boolean;
}
