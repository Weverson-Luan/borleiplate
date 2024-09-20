import { sharedColors } from "./colors";
import { fontSize } from "./fontsize";

export const lightTheme = {
  fontSize: {
    ...fontSize,
  },
  colors: {
    ...sharedColors,
    ...fontSize,
    backgroundColor: sharedColors.neutral25,
    typography: sharedColors.black100,
    accent: sharedColors.red600,
  },
};

export const darkTheme = {
  fontSize: {
    ...fontSize,
  },
  colors: {
    ...sharedColors,
    backgroundColor: sharedColors.black100,
    typography: sharedColors.neutral25,
    accent: sharedColors.pike,
  },
};

export const premiumTheme = {
  fontSize: {
    ...fontSize,
  },
  colors: {
    ...sharedColors,
    ...fontSize,
    backgroundColor: sharedColors.pike,
    typography: sharedColors.purple500,
    accent: sharedColors.black,
  },
};
