import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import styles from "../../globalStyles/styles";
import { Seat } from "../../assets";
const Headers = ({}) => {
  const [filtered, setFiltered] = useState(["Available", "Occupied", "Chosen"]);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
      }}
    >
      {filtered.map((item) => (
        <View style={styles.circleBox}>
          {item === "Occupied" ? (
            <Image source={Seat} style={{ marginRight: 3 }} />
          ) : (
            <View style={styles.circle(item)}></View>
          )}
          <Text style={styles.circleText}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default Headers;
