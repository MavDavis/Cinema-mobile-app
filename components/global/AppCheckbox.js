import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import { colors } from "../../assets";

const AppCheckbox = ({ isChecked, toggleCheckbox }) => {
  // Create an animated value for the circle's position
  const circlePosition = new Animated.Value(isChecked ? -10 : 10);

  // Animate the circle's position when isChecked changes
  Animated.timing(circlePosition, {
    toValue: isChecked ? 8 : -8,
    duration: 300, // Adjust the animation duration as needed
    easing: Easing.ease,
    useNativeDriver: false,
  }).start();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={toggleCheckbox}
      style={[styles.container, isChecked ? styles.checked : null]}
    >
      <View style={styles.checkbox(isChecked)}>
        <Animated.View
          style={[
            styles.circle(isChecked),
            { transform: [{ translateX: circlePosition }] }, // Apply translation animation
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  checkbox: (isChecked) => ({
    width: 40,
    height: 24,
    borderRadius: 12,

    alignItems: "center",
    backgroundColor: !isChecked ? colors.darkNav : colors.orange,
    justifyContent: "center",
    position: "relative",
  }),
  circle: (isChecked) => ({
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: !isChecked ? colors.darkTextTwo : colors.darkText,
  }),
  text: {
    marginLeft: 8,
  },
  checked: {
    //backgroundColor: "green",
    borderColor: "green",
  },
});

export default AppCheckbox;
