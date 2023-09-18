import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors } from "../../assets";
const Availability = ({ movie }) => {
  const List = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 12,
          borderBottomWidth: 0.5,
          marginBottom: 6,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flex: 0.25,
          }}
        >
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
        <View
          style={{
            flex: 0.75,
          }}
        >
          <Text style={styles.miniTitle}>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 4,
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.price}>₦{item.amounts.student}</Text>
            <Text style={styles.price}>₦{item.amounts.student}</Text>
            <Text style={styles.price}>₦{item.amounts.student}</Text>
            <Text style={styles.price}>₦{item.amounts.student}</Text>
          </View>
        </View>
      </View>
    );
  };
  let [availability, setAvailability] = useState(movie?.availability);
  return availability.map((item) => (
    <ScrollView style={{ flex: 1 }}>
      <List item={item} key={`key-id-${item.name}`} />
    </ScrollView>
  ));
};

export default Availability;
const styles = StyleSheet.create({
  time: {
    color: colors.darkText,
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 24,
  },
  location: {
    color: colors.darkTextTwo,
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
    lineHeight: 14,
  },
  miniTitle: {
    color: colors.darkText,
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 24,
  },
  price: {
    color: colors.darkText,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 18,
  },
});
