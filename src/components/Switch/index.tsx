import React, { useCallback, useEffect, useRef, useState } from "react";

import { View, Animated, LayoutChangeEvent, Pressable, StyleSheet } from "react-native";

import Divider from "../Divider";
import Text from "../Text";

import type { SwitchProps } from "./type";

import { COLORS } from "@/theme/colors";
import globalStyles from "@/theme/globalStyles";
import { RADIUS } from "@/theme/radius";

const styles = StyleSheet.create({
  container: {
    ...globalStyles.rowAlignCenterContainer
  },
  switchContainer: {
    width: 50,
    height: 30,
    padding: 2,
    backgroundColor: COLORS.red300,
    borderRadius: RADIUS.circle
  },
  ellipse: {
    width: 26,
    height: 26,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.circle
  },
  disabledEllipse: {
    backgroundColor: COLORS.red100
  },
  disabledBackground: {
    backgroundColor: COLORS.red100
  }
});

/**
 * @component
 * 토글 Switch

 * @example
 * <Switch
 *   label=''           // optional
 *   isActive={false}   // optional
 *   disabled={false}   // optional
 * />
 */
const Switch = ({ isActive = false, label = "", disabled = false, ...props }: SwitchProps) => {
  const animation = useRef(new Animated.Value(isActive ? 1 : 0)).current;

  const [containerWidth, setContainerWidth] = useState(0);

  const onLayoutContainer = useCallback(
    ({
      nativeEvent: {
        layout: { width }
      }
    }: LayoutChangeEvent) => {
      setContainerWidth(width);
    },
    []
  );

  useEffect(() => {
    Animated.timing(animation, {
      duration: 150,
      toValue: isActive ? 1 : 0,
      useNativeDriver: false
    }).start();
  }, [animation, isActive]);

  return (
    <View style={styles.container}>
      {label && (
        <>
          <Text fontSize={16} fontWeight="400" color={COLORS.black} textAlign="center">
            {label}
          </Text>

          <Divider horizontal={16} />
        </>
      )}

      <Pressable disabled={disabled} onLayout={onLayoutContainer} {...props}>
        <Animated.View
          style={[
            styles.switchContainer,
            {
              backgroundColor: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [COLORS.grey200, COLORS.red300]
              })
            },
            disabled && styles.disabledBackground
          ]}
        >
          <Animated.View
            style={[
              styles.ellipse,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, containerWidth - 30]
                    })
                  }
                ]
              },
              disabled && styles.disabledEllipse
            ]}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default Switch;
