/**
 * IMPORTS
 */

import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ArrowUp } from "phosphor-react-native";

import Animated, {
  BounceIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

// styles
import { styles } from "./styles";

type IProps = {
  value: number;
  onMoveTop: () => void;
};

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

const ProgressBar = ({ value, onMoveTop }: IProps) => {
  const widthContainer = useSharedValue(200);

  // para sabe se cheguei no final do texto em tela
  const onReached = value >= 95;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });

  useEffect(() => {
    widthContainer.value = withSpring(onReached ? 56 : 200, { mass: 0.4 });
  }, [value]);
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {onReached ? (
        <TouchableOpacityAnimated
          onPress={onMoveTop}
          entering={BounceIn}
          exiting={FadeOut}
        >
          <ArrowUp size={24} color="#fff" />
        </TouchableOpacityAnimated>
      ) : (
        <Animated.View style={styles.progressConten}>
          <Text style={styles.textValue}>{value}%</Text>

          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]} />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
};

/**
 * EXPORTS
 */
export { ProgressBar };
