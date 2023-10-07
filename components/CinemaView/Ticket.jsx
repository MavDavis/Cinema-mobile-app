import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BucketHandleBorder from "./BucketHandleBorder";

const Ticket = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <BucketHandleBorder />
      <Text>Ticket</Text>
    </View>
  );
};

export default Ticket;
