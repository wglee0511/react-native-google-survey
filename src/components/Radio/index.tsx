import React, { useMemo } from "react";

import { Pressable, StyleSheet } from "react-native";

import Icon from "../Icon";
import type { IconOption } from "../Icon/type";

import type { RadioProps } from "./type";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 6,
    paddingVertical: 6
  }
});

/**
 * @component
 * 한 가지의 옵션을 선택할 때 사용하는 라디오

 * @example
 * <Radio
 *   size={24}                            // optional
 *   selected={false}                     // optional
 *   disabled={false}                     // optional
 *   backgroundColor={COLORS.primary500}  // optional
 * />
 */
const Radio = ({
  size = 20,
  selected = false,
  disabled = false,
  backgroundColor,
  ...props
}: RadioProps) => {
  const iconOption = useMemo(() => {
    if (selected && !disabled) {
      return "SelectedRadioEnabled";
    }

    if (selected && disabled) {
      return "SelectedRadioDisabled";
    }

    if (!selected && !disabled) {
      return "UnselectedRadioEnabled";
    }

    if (!selected && disabled) {
      return "UnselectedRadioDisabled";
    }

    return "UnselectedRadioEnabled";
  }, [selected, disabled]) as IconOption;

  return (
    <Pressable style={styles.container} disabled={disabled} {...props}>
      <Icon icon={iconOption} size={size} color={backgroundColor} />
    </Pressable>
  );
};

export default Radio;
