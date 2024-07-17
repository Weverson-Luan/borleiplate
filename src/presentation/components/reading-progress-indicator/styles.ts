import { StyleSheet } from "react-native";
import theme from "../../../core/styles/styled-components/theme";

/**
 * IMPORTS
 */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black_800,
    padding: 24,
  },
  title: {
    fontSize: 34,
    color: theme.colors.neutral_25,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: theme.colors.neutral_25,
    marginVertical: 22,
    textAlign: "justify",
  },
  content: {
    paddingTop: 100,
  },
});
