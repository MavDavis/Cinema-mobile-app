import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../assets/colors";

const BucketHandleBorder = ({ isEnlarged }) => {
  return (
    <View style={{ ...styles.container, marginVertical: isEnlarged ? 25 : 0 }}>
      <Text style={{ color: colors.darkTextTwo }}>Screen</Text>
      <View style={styles.handle}>
        <View style={styles.bentEndLeft} />
        <View style={styles.handleBody} />
        <View style={styles.bentEndRight} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  handle: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%", // Adjust the width as needed
  },
  bentEndLeft: {
    width: "10%",
    height: 0.8,
    backgroundColor: colors.darkTextTwo,
    transform: [{ translateY: 3 }, { translateX: 1 }, { rotate: "-10deg" }],
  },
  handleBody: {
    width: "80%",
    margin: 0,
    height: 0.8,
    backgroundColor: colors.darkTextTwo,
  },
  bentEndRight: {
    width: "10%",
    height: 0.8,
    backgroundColor: colors.darkTextTwo,

    transform: [{ translateY: 3 }, { translateX: -0.5 }, { rotate: "10deg" }],
  },
  cinemaTicket: (item) => ({}),
});

export default BucketHandleBorder;
