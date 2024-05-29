/**
 * IMPORTS
 */
import { createStyleSheet } from "react-native-unistyles";

const stylesheetMoreUnistyles = createStyleSheet((theme, rt) => ({
  container: {
    flex: 1,
    paddingTop: rt.insets.top + 50,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: theme.colors.backgroundColor,
    padding: 32,
  },
  text: {
    fontSize: 20,
    color: theme.colors.typography,
  },
  highlight: {
    fontWeight: "bold",
    color: theme.colors.accent,
  },
  note: {
    color: theme.colors.typography,
    textAlign: "justify",
  },
  playground: {
    flex: 1,
    marginTop: 20,
    textAlign: "justify",
  },
  cta: {
    width: "100%",
    backgroundColor: theme.colors.blue800,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 4.8,
    marginBottom: rt.insets.bottom,
  },
  bold: {
    fontWeight: "bold",
    textAlign: "justify",
    fontSize: theme.fontSize["2xl"],
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "justify",
  },
}));

/**
 * EXPORTS
 */
export { stylesheetMoreUnistyles };
