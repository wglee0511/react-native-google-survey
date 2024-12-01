import { COLORS } from "src/theme/colors";

const globalStyles = {
  defaultFlexContainer: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "row"
  },
  rowAlignCenterContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  alignCenter: {
    alignItems: "center"
  },
  justifyCenter: {
    justifyContent: "center"
  },
  justifyFlexStart: {
    justifyContent: "flex-start"
  },
  justifyFlexEnd: {
    justifyContent: "flex-end"
  },
  justifySpaceBetween: {
    justifyContent: "space-between"
  },
  alignFlexEnd: {
    alignSelf: "flex-end"
  },
  alignFlexStart: {
    alignSelf: "flex-start"
  },
  alignItemsFlexEnd: {
    alignItems: "flex-end"
  },
  defaultBackgroundColor: {
    backgroundColor: COLORS.red200
  },
  defaultPadding: {
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  defaultPaddingHorizontal: {
    paddingHorizontal: 20
  },
  defaultPaddingVertical: {
    paddingVertical: 16
  },
  defaultBottomButtonPadding: {
    paddingVertical: 7,
    paddingHorizontal: 20
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  sectionTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 48
  }
} as const;

export default globalStyles;
