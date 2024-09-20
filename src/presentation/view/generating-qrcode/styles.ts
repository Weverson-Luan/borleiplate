/**
 * IMPORTS
 */

import { StyleSheet } from "react-native";
import theme from "../../../app/styles/styled-components/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#cdcdcd",
    fontSize: 14,
    fontWeight: "normal",
  },
  ticket: {
    width: "100%",
    backgroundColor: "white",

    borderRadius: 22,
    overflow: "hidden",
    paddingBottom: 44,
  },
  content: {
    padding: 24,
  },
  flight: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52,
  },
  duration: {
    alignItems: "center",
  },
  hours: {
    color: theme.colors.black_800,
    fontSize: 14,
  },
  label: {
    color: theme.colors.black_800,
    fontSize: 12,
    textTransform: "uppercase",
  },
  name: {
    color: theme.colors.black_800,
    fontSize: 24,
    textTransform: "none",
    fontWeight: "bold",
  },
  details: {
    marginTop: 52,
  },
  inline: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    width: "100%",
    padding: 20,
    flexDirection: "row",
    gap: 16,
  },
  footerContent: {
    flex: 1,
    gap: 12,
  },
});

/**
 * EXPORTS
 */
export { styles };
