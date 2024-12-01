import type { TextInputProps, TextStyle } from "react-native";

export interface InputFieldProps
  extends TextInputProps,
    Pick<TextStyle, "fontSize" | "fontWeight"> {
  width?: string | number;

  /** Input 하단 텍스트 */
  supportingText?: string;

  /** 비활성화 여부 */
  disabled?: boolean;

  /** 변경은 불가능하지만 value가 강조된 상태 */
  disableAccent?: boolean;

  /** 에러 여부 */
  hasError?: boolean;

  /** 필드 포커스 여부 */
  focused?: boolean;

  /** 필수 * 표시 추가 여부 */
  required?: boolean;

  /** 키보드로 값 변경 가능 여부 */
  editable?: boolean;

  /** Input value 초기화 이벤트 */
  onPressClear?: () => void;
}

export interface GetInputStatusColorProps {
  disabled?: boolean;
  disableAccent?: boolean;
  hasError?: boolean;
  isFocused?: boolean;
}
