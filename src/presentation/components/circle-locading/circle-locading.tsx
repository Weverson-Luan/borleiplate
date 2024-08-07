import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

const CircleLoader = () => {
  const largeCircle = 30;
  const smallCircle = 8;
  const numOfCircles = Math.floor(
    (2 * Math.PI * largeCircle) / (2 * smallCircle * 1.2)
  );

  const rotate = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotate.value}rad` }],
  }));

  console.log("NM::", numOfCircles);

  const getRandomColor = () => {
    const string = "1234567890ABCDEF";
    let color = "#";

    for (let index = 0; index < 6; index++) {
      color = color + string[Math.floor(Math.random() * 16)];
    }

    return color;
  };

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(2 * Math.PI, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      false
    );
  });

  const renderCircles = () => {
    let circles = [];
    for (let i = 0; i < numOfCircles; i++) {
      const angle = (2 * Math.PI * i) / numOfCircles;
      const x = Math.cos(angle) * largeCircle;
      const y = Math.sin(angle) * largeCircle;
      const randomColor = getRandomColor();

      circles.push(
        <View
          key={i}
          style={[
            styles.smallCircle,
            {
              left: x - smallCircle + largeCircle,
              top: y - smallCircle + largeCircle,
              backgroundColor: randomColor,
            },
          ]}
        ></View>
      );
    }
    return circles;
  };
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.largeCircle, animatedStyle]}>
        {renderCircles()}
      </Animated.View>
    </View>
  );
};

export default CircleLoader;
