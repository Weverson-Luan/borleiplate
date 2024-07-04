import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  rippleView: {
    width: wp(80),
    height: wp(80),
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 200,
    backgroundColor: "#f29559",
  },
  innerCircle: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
    backgroundColor: "#f29559",
    justifyContent: "center",
  },
  innerText: {
    fontSize: 14,
    alignSelf: "center",
    fontWeight: "bold",
    position: "absolute",
    top: wp(10),
  },
});
