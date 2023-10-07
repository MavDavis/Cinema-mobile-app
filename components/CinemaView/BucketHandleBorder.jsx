import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { colors } from "../../assets/colors";
import { connect } from "react-redux";

const BucketHandleBorder = ({ dummyCinemaTickets }) => {
  const Cinema = ({ item }) => {
    return <View style={styles.cinemaTicket(item.name)}></View>;
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.darkTextTwo }}>Screen</Text>
      <View style={styles.handle}>
        <View style={styles.bentEndLeft} />
        <View style={styles.handleBody} />
        <View style={styles.bentEndRight} />
      </View>
      <FlatList
        data={dummyCinemaTickets}
        keyExtractor={(item) => `${item}-${Math.random() * 10000}-Abc`}
        renderItem={Cinema}
        contentContainerStyle={{ paddingHorizontal: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
const mapStateToProps = (state) => {
  return {
    dummyCinemaTickets: state.cinema.dummyCinemaTickets,
  };
};
const objectToExport = connect(mapStateToProps, null)(BucketHandleBorder);
export default objectToExport;
