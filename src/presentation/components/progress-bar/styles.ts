import { StyleSheet } from "react-native";
import theme from "../../../core/styles/styled-components/theme";

/**
 * IMPORTS
 */
export const styles = StyleSheet.create({
  container: {
    // width: 200,
    height: 56,
    backgroundColor: theme.colors.blue_cyan_200,
    position: "absolute",
    bottom: 64,
    alignSelf: "center",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  textValue: {
    marginRight: 8,
    color: theme.colors.neutral_25,
  },
  tracker: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: "red",
  },
  progress: {
    height: 3,
    borderRadius: 3,
    backgroundColor: "blue",
  },
  progressConten: {
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
  },
});
