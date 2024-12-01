import React from "react";

import { Text as NativeText } from "react-native";

import type { TextProps } from "./type";

/**
 * @component
 * 텍스트

 * @example
 * <Text
 *   typography="body1"                   // required
 *   fontWeight="medium"                  // required
 *   color={TEXT_COLORS.textPrimary}      // required
 *   isVerticalScale={false}              // optional
 *   textAlign="center"                   // optional
 * >
 *   Text
 * </Text>
 */

const Text = ({
  fontSize,
  fontWeight,
  color,
  numberOfLines,
  letterSpacing,
  textAlign,
  textDecorationLine,
  textDecorationStyle,
  textDecorationColor,
  textShadowColor,
  textShadowOffset,
  textShadowRadius,
  textTransform,
  flexShrink,
  children,
  ...props
}: React.PropsWithChildren<TextProps>) => (
  <NativeText
    style={[
      {
        color,
        letterSpacing,
        textAlign,
        textDecorationLine,
        textDecorationStyle,
        textDecorationColor,
        textShadowColor,
        textShadowOffset,
        textShadowRadius,
        textTransform,
        flexShrink,
        fontSize,
        fontWeight
      }
    ]}
    numberOfLines={numberOfLines}
    {...props}
  >
    {children}
  </NativeText>
);

export default Text;
