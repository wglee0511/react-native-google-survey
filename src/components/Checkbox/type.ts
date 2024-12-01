import type { PressableProps } from "react-native";

export interface CheckboxProps extends PressableProps {
  /** 크기 */
  size?: number;

  /** 체크 여부 */
  checked?: boolean;

  /** disable 여부 */
  disabled?: boolean;

  /** 선택된 체크박스의 배경 색상 */
  backgroundColor?: string;
}
