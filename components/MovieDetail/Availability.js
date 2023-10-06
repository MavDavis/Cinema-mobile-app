import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { colors } from "../../assets";
import { connect } from "react-redux"; // Import connect
import { addCinemaTicket } from "../../actions/types";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
const Availability = ({ movie, addCinemaTicket }) => {
  const router = useRouter();

  const List = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          router.push(`CinemaView`);
          addCinemaTicket(item);
        }}
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
            <Text style={styles.price}>₦{item.amounts.adult}</Text>
            <Text style={styles.price}>₦{item.amounts.child}</Text>
            <Text style={styles.price}>₦{item.amounts.student}</Text>
            <Text style={styles.price}>₦{item.amounts.vip}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  let [availability, setAvailability] = useState(movie?.availability);
  return availability.map((item) => (
    <List item={item} key={`key-id-${item.name}`} />
  ));
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCinemaTicket: (cinemaTicket) => {
      dispatch(addCinemaTicket(cinemaTicket));
    },
  };
};
export default connect(null, mapDispatchToProps)(Availability);
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
