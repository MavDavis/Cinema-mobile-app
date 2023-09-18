import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "../../globalStyles/styles";
import About from "./About";
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
    <View>
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
        <About movie={movie} handlePressFunc={() => handleItemPress(1)} />
      )}
      {items[1].selected && (
        <View>
          <Text>Session</Text>
        </View>
      )}
    </View>
  );
};

export default AppTab;
