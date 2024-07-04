import { StyleSheet } from "react-native";

const largeCircle = 30;
const smallCircle = 8;
const numOfCircles = Math.floor(
  (2 * Math.PI * largeCircle) / (2 * smallCircle * 1.2)
);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  largeCircle: {
    width: 2 * largeCircle,
    height: 2 * largeCircle,
    borderRadius: largeCircle,
  },
  smallCircle: {
    width: 2 * smallCircle,
    height: 2 * smallCircle,
    borderRadius: smallCircle,
    borderWidth: 1,
    position: "absolute",
  },
});
