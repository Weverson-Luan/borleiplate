import { View } from "react-native";
import React, { useEffect } from "react";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

const RippleEffect = () => {
  const scaleValue = useSharedValue(1);
  const opacityValue = useSharedValue(1);
  const textScaleValue = useSharedValue(0.4);

  const animatedCircle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleValue.value }],
      opacity: opacityValue.value,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: textScaleValue.value }],
    };
  });

  const startRippleAnimation = () => {
    scaleValue.value = withRepeat(withTiming(3, { duration: 1000 }), -1);
    opacityValue.value = withRepeat(withTiming(0, { duration: 1000 }), -1);
    textScaleValue.value = withRepeat(withTiming(1, { duration: 1000 }), -1);
  };

  useEffect(() => {
    startRippleAnimation();
  }, []);

  return (
    <View style={styles.rippleView}>
      <View style={[styles.circle]}>
        <Animated.View
          style={[animatedCircle, styles.innerCircle]}
        ></Animated.View>
        <Animated.Text style={[animatedTextStyle, styles.innerText]}>
          Scanning
        </Animated.Text>
      </View>
    </View>
  );
};

export default RippleEffect;
