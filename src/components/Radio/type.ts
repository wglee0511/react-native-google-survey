import type { PressableProps } from 'react-native';

export interface RadioProps extends PressableProps {
  /** 크기 */
  size?: number;

  /** 선택 여부 */
  selected?: boolean;

  /** disable 여부 */
  disabled?: boolean;

  /** 선택된 라디오의 배경 색상 */
  backgroundColor?: string;
}
