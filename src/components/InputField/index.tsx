import React, { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  NativeSyntheticEvent,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  View
} from "react-native";

import type { InputFieldProps } from "./type";
import {
  getInputBackgroundStatusColor,
  getInputBorderStatusColor,
  getInputTextStatusColor
} from "./util";

import { isIOS } from "@/constants/env";
import { COLORS } from "@/theme/colors";
import "./styles.css";

const borderContainerStyle = (isThickBorder: boolean) =>
  StyleSheet.create({
    container: {
      justifyContent: "center",
      paddingHorizontal: 15,
      borderBottomWidth: isThickBorder ? 2 : 1,
      overflow: "hidden"
    },
    inner: {
      flexDirection: "row",
      alignItems: "center",
      padding: isThickBorder ? 0 : 1
    }
  });

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  innerContainer: {
    width: "100%"
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1
  },
  inputInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  input: {
    padding: 0
  },
  iconContainer: {
    paddingHorizontal: 5
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

const InputField = forwardRef<TextInput, InputFieldProps>(
  (
    {
      width,
      fontSize = 15,
      fontWeight = 400,
      supportingText,
      disabled,
      editable = true,
      focused = false,
      disableAccent = false,
      hasError = false,
      ...props
    },
    refFromParent
  ) => {
    const [isEditableTextInputFocused, setIsEditableTextInputFocused] = useState(false);

    const inputRef = useRef<TextInput>(null);

    const isFocused = useMemo(
      () => (editable && isEditableTextInputFocused) || (!editable && focused),
      [editable, focused, isEditableTextInputFocused]
    );

    const isThickBorder = (isFocused || hasError) && (!disabled || !disableAccent);

    const { input: inputColor } = useMemo(
      () =>
        getInputTextStatusColor({
          disabled,
          disableAccent,
          hasError
        }),
      [disableAccent, disabled, hasError]
    );

    const borderColor = useMemo(
      () =>
        getInputBorderStatusColor({
          disabled,
          disableAccent,
          hasError,
          isFocused
        }),
      [disableAccent, disabled, hasError, isFocused]
    );

    const backgroundColor = useMemo(
      () =>
        getInputBackgroundStatusColor({
          disabled,
          disableAccent
        }),
      [disableAccent, disabled]
    );

    const handleTextInputFocusEvent = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsEditableTextInputFocused(true);
        if (props.onFocus) {
          props.onFocus(event);
        }
      },
      [props]
    );

    const handleTextInputBlurEvent = useCallback(
      (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsEditableTextInputFocused(false);
        if (props.onBlur) {
          props.onBlur(event);
        }
      },
      [props]
    );

    const onPressContainer = useCallback(() => {
      inputRef?.current?.focus?.();
    }, []);

    useEffect(() => {
      if (refFromParent && "current" in refFromParent) {
        refFromParent.current = inputRef.current;
      }
    }, [refFromParent]);

    return (
      <Pressable
        // @ts-ignore
        style={width ? { width } : {}}
        onPress={onPressContainer}
      >
        <View
          style={[
            borderContainerStyle(isThickBorder).container,
            {
              height: 46,
              borderColor,
              backgroundColor
            }
          ]}
        >
          <View style={borderContainerStyle(isThickBorder).inner}>
            <View style={styles.inputContainer}>
              <View style={styles.inputInnerContainer}>
                <TextInput
                  ref={inputRef}
                  style={[
                    styles.input,
                    { fontSize, fontWeight },
                    isIOS && {
                      lineHeight: 0
                    },
                    {
                      color: inputColor
                    }
                  ]}
                  editable={editable && !disabled && !disableAccent}
                  placeholderTextColor={COLORS.grey700}
                  {...props}
                  onFocus={handleTextInputFocusEvent}
                  onBlur={handleTextInputBlurEvent}
                />
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    );
  }
);

export default InputField;
