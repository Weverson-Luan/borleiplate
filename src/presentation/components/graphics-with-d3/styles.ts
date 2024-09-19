import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1d1f",
    paddingTop: 64,
  },

  footer: {
    position: "absolute",
    bottom: 64,
    left: 24,
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#fff",
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "medium",
    color: "#cecece",
  },
});
