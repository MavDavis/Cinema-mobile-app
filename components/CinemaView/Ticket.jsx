import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { colors, SmallSeat } from "../../assets/colors";
import React from "react";
import { connect } from "react-redux";
import BucketHandleBorder from "./BucketHandleBorder";

const Ticket = ({ dummyCinemaTickets }) => {
  const Cinema = ({ item }) => {
    return (
      <>
        {item.picked === "available" || item.picked === "chosen" ? (
          <View style={styles.cinemaTicket(item.picked)}></View>
        ) : (
          <Image source={SmallSeat} />
        )}
      </>
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <BucketHandleBorder />
      <View
        style={{
          justifyContent: "center",
          marginTop: 12,
          alignItems: "center",
        }}
      >
        <FlatList
          data={dummyCinemaTickets}
          keyExtractor={(item) => `${item}-${Math.random() * 10000}-Abcd `}
          renderItem={Cinema}
          numColumns={10}
          contentContainerStyle={{ paddingHorizontal: 0 }}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    dummyCinemaTickets: state.cinema.dummyCinemaTickets,
  };
};
const objectToExport = connect(mapStateToProps, null)(Ticket);

const styles = StyleSheet.create({
  cinemaTicket: (item) => ({
    width: 12,
    height: 12,
    padding: 4,
    borderRadius: 9999,
    marginVertical: 3,
    marginHorizontal: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      item === "chosen"
        ? colors.orange
        : item === "occupied"
        ? "#1F293D"
        : "rgba(109, 158, 255, 0.10)",
  }),
});
export default objectToExport;
