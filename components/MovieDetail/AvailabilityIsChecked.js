import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import React, { useState } from "react";
import { colors, darkLocation } from "../../assets";
import { TouchableOpacity } from "react-native-gesture-handler";
const Availability = ({ movie }) => {
  const router = useRouter();

  const List = ({ item }) => {
    return (
      <View style={{}}>
        <View
          style={{
            flexDirection: "row",
            padding: 12,
            borderBottomWidth: 0.5,
            marginBottom: 6,
            alignItems: "center",
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
        {item.extraTime.map((newItem, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                router.push(`CinemaView`);
              }}
              key={index}
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
                <Text style={styles.time}>{newItem.time}</Text>
                <Text style={styles.location}>{newItem.loc}</Text>
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
                  <Text style={styles.price}>₦{item.amounts.adult}</Text>
                  <Text style={styles.price}>₦{item.amounts.child}</Text>
                  <Text style={styles.price}>₦{item.amounts.student}</Text>
                  <Text style={styles.price}>₦{item.amounts.vip}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
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
