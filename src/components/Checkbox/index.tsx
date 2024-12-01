import React, { useMemo } from "react";

import { Pressable, StyleSheet } from "react-native";

import Icon from "../Icon";
import type { IconOption } from "../Icon/type";

import type { CheckboxProps } from "./type";

import { COLORS } from "@/theme/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 11,
    paddingVertical: 11
  }
});

const Checkbox = ({
  size = 18,
  checked = false,
  disabled = false,
  backgroundColor = COLORS.red400,
  ...props
}: CheckboxProps) => {
  const iconOption = useMemo(() => {
    if (checked && !disabled) {
      return "CheckboxEnabled";
    }

    if (checked && disabled) {
      return "CheckboxDisabled";
    }

    if (!checked && !disabled) {
      return "UnCheckboxEnabled";
    }

    if (!checked && disabled) {
      return "UnCheckboxDisabled";
    }

    return "UnCheckboxEnabled";
  }, [checked, disabled]) as IconOption;

  return (
    <Pressable style={styles.container} disabled={disabled} {...props}>
      <Icon icon={iconOption} size={size} color={backgroundColor} />
    </Pressable>
  );
};

export default Checkbox;
