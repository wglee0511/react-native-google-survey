import type { GetInputStatusColorProps } from "./type";

import { COLORS } from "@/theme/colors";

export const getInputBorderStatusColor = ({
  disabled,
  disableAccent,
  hasError,
  isFocused
}: GetInputStatusColorProps) => {
  if (disabled) {
    return COLORS.grey400;
  }
  if (disableAccent) {
    return COLORS.grey400;
  }
  if (hasError) {
    return COLORS.red200;
  }
  if (isFocused) {
    return COLORS.red500;
  }
  return COLORS.grey300;
};

export const getInputBackgroundStatusColor = ({
  disabled,
  disableAccent
}: GetInputStatusColorProps) => {
  if (disabled || disableAccent) {
    return COLORS.white;
  }
  return COLORS.white;
};

export const getInputTextStatusColor = ({
  disabled,
  disableAccent,
  hasError
}: GetInputStatusColorProps) => {
  if (disabled) {
    return {
      label: COLORS.grey400,
      input: COLORS.grey400,
      supportingText: COLORS.grey400,
      required: COLORS.grey400
    };
  }
  if (disableAccent) {
    return {
      label: COLORS.grey400,
      input: COLORS.grey400,
      supportingText: COLORS.grey400,
      required: COLORS.grey400
    };
  }
  if (hasError) {
    return {
      label: COLORS.red400,
      input: COLORS.red400,
      supportingText: COLORS.red400,
      required: COLORS.red400
    };
  }
  return {
    label: COLORS.black,
    input: COLORS.black,
    supportingText: COLORS.black,
    required: COLORS.black
  };
};
