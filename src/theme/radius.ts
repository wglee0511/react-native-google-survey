export type Radius =
  | "none"
  | "button"
  | "s"
  | "base"
  | "lg"
  | "xl"
  | "xxl"
  | "circle"
  | "xs"
  | "card";

type RadiusStyle = {
  [key in Radius]: number;
};

export const RADIUS: RadiusStyle = {
  none: 0,
  xs: 2,
  button: 6,
  s: 4,
  base: 8,
  lg: 12,
  xl: 24,
  xxl: 100,
  circle: 1000,
  card: 10
} as const;
