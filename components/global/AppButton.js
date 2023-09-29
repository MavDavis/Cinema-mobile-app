import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const AppButton = ({ text, handlePress, bgColor, textColor }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 20,
        width: "100%",
      }}
    >
      <Text
        style={{
          color: textColor,
          textAlign: "center",
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;
