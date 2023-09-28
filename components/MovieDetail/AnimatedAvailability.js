import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Availability from "./Availability";
import AvailabilityIsChecked from "./AvailabilityIsChecked";
import Animated, {
  Easing,
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
} from "react-native-reanimated";

const AnimatedAvailability = ({ movie, isChecked }) => {
  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = withTiming(isChecked ? 1 : 0, {
      duration: 500, // Adjust the duration as needed
      easing: Easing.linear,
    });
  }, [isChecked]);

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = withTiming(animation.value * 100, {
      duration: 500, // Adjust the duration as needed
      easing: Easing.linear,
    });
    return {
      transform: [{ translateX }],
    };
  });

  const animatedStyleIsChecked = useAnimatedStyle(() => {
    const translateX = withTiming(isChecked ? 0 : -100, {
      duration: 500, // Adjust the duration as needed
      easing: Easing.linear,
    }); // Start from outside the view and end at 0 when isChecked is true
    return {
      transform: [{ translateX }],
    };
  });

  return (
    <View>
      <Animated.View>
        {isChecked ? (
          <AvailabilityIsChecked
            movie={movie}
            // style={[
            //   animatedStyle,
            //   {
            //     // Additional styles if needed
            //   },
            // ]}
          />
        ) : (
          <Availability
            movie={movie}
            // style={[
            //   animatedStyle,
            //   {
            //     // Additional styles if needed
            //   },
            // ]}
          />
        )}
      </Animated.View>
    </View>
  );
};

export default AnimatedAvailability;
