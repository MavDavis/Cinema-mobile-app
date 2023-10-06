import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "../../globalStyles/styles";
import About from "./About";
import Session from "./Session";
import AppButton from "../global/AppButton";
import { colors } from "../../assets";
const AppTab = ({ movie }) => {
  const [items, setItems] = useState([
    { name: "About", selected: true },
    { name: "Sessions", selected: false },
  ]);
  const handleItemPress = (index) => {
    const updatedItems = items.map((item, i) => ({
      ...item,
      selected: i === index,
    }));
    setItems(updatedItems);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.AppTab}>
        {items.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleItemPress(index)}
            style={styles.AppTabTextContainer(item.selected)}
            key={index}
          >
            <Text style={styles.AppTabText(item.selected)}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {items[0].selected && (
        <View style={{ flex: 1 }}>
          <About movie={movie} />
          <View style={{ paddingHorizontal: 12, paddingTop: 12 }}>
            <AppButton
              handlePress={() => {
                handleItemPress(1);
              }}
              bgColor={colors.orange}
              textColor={colors.darkText}
              text="Select session"
            />
          </View>
        </View>
      )}
      {items[1].selected && (
        <View style={{ flex: 1 }}>
          <Session movie={movie} />
        </View>
      )}
    </View>
  );
};

export default AppTab;
