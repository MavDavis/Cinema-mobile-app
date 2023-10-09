import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors, SmallSeat, Seat } from "../../assets/colors";
import React, { useState } from "react";
import { connect } from "react-redux";
import BucketHandleBorder from "./BucketHandleBorder";
const Ticket = ({ dummyCinemaTickets, handleEnlarging, isEnlarged }) => {
  const Cinema = ({ item }) => {
    return (
      <>
        {item.picked === "available" || item.picked === "chosen" ? (
          <View style={styles.cinemaTicket(item.picked)}></View>
        ) : item.picked === "occupied" ? (
          <Image source={Seat} alt="seat-ticket" style={styles.seatImage} />
        ) : (
          <></>
        )}
      </>
    );
  };
  const CinemaBig = ({ item }) => {
    return (
      <TouchableOpacity style={styles.cinemaTicketBig(item.picked)}>
        <Text style={{ color: colors.darkText }}>{item.number}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <TouchableOpacity
      onPress={() => {
        if (!isEnlarged) {
          handleEnlarging();
          return;
        }
      }}
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <BucketHandleBorder isEnlarged={isEnlarged} />
      {!isEnlarged ? (
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
      ) : (
        <View
          style={{
            justifyContent: "center",
            paddingHorizontal: 4,
            alignItems: "center",
          }}
        >
          <FlatList
            data={dummyCinemaTickets}
            keyExtractor={(item) => `${item}-${Math.random() * 10000}-Abcd `}
            renderItem={CinemaBig}
            numColumns={10}
            contentContainerStyle={{ paddingHorizontal: 0 }}
          />
        </View>
      )}
    </TouchableOpacity>
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
  cinemaTicketBig: (item) => ({
    width: 32,
    height: 32,
    padding: 4,
    borderRadius: 4,
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
  seatImage: {
    width: 12,
    height: 12,
    padding: 4,
    borderRadius: 9999,
    marginVertical: 3,
    marginHorizontal: 8,
    backgroundColor: "#1F293D",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default objectToExport;
