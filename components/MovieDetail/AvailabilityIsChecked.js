import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { colors, darkLocation } from "../../assets";
import { TouchableOpacity } from "react-native-gesture-handler";
const Availability = ({ movie }) => {
  const LittleList = (newItem, item) => {
    console.log(item);
    return (
      <TouchableOpacity
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
          <Text style={styles.time}>{newItem.newItem}</Text>
          <Text style={styles.location}>{item.location}</Text>
        </View>
        <View
          style={{
            flex: 0.75,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 4,
              justifyContent: "space-between",
            }}
          >
            {/* <Text style={styles.price}>₦{item.amounts.student}</Text>
            <Text style={styles.price}>₦{item.amounts.student}</Text>
            <Text style={styles.price}>₦{item.amounts.student}</Text>
            <Text style={styles.price}>₦{item.amounts.student}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const List = ({ item }) => {
    return (
      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            padding: 12,
            borderBottomWidth: 0.5,
            marginBottom: 6,
            justifyContent: "space-between",
          }}
        >
          <View style={{ alignItems: "start" }}>
            <Text style={styles.time}>{item.name}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image source={darkLocation} style={{ marginRight: 8 }} />
            <Text style={styles.location}>
              {item.distance_from_your_location}
            </Text>
          </View>
        </View>
        {item.extraTime.map((newItem, index) => (
          <LittleList newItem={newItem} item={item.amounts} key={index} />
        ))}
      </View>
    );
  };
  let [availability, setAvailability] = useState(movie?.availability);
  return availability.map((item) => (
    <List item={item} key={`key-id-${item.name}`} />
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
