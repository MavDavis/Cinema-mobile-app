import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { colors, SmallSeat, Seat } from "../../assets/colors";
import { markTicketChosen } from "../../actions/types";
import React, { useState } from "react";
import { connect } from "react-redux";
import BucketHandleBorder from "./BucketHandleBorder";
const Ticket = ({
  dummyCinemaTickets,
  handleEnlarging,
  isEnlarged,
  markTicketChosen,
}) => {
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
  // const CinemaBig =
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {!isEnlarged && <BucketHandleBorder isEnlarged={isEnlarged} />}
      {!isEnlarged ? (
        <TouchableOpacity
          onPress={() => {
            if (!isEnlarged) {
              handleEnlarging();
              return;
            }
          }}
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
        </TouchableOpacity>
      ) : (
        <ScrollView horizontal={true} style={{ paddingHorizontal: 4 }}>
          <FlatList
            data={dummyCinemaTickets}
            keyExtractor={(item) => `${item}-${Math.random() * 10000}-Abcd `}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  disabled={item.picked === "occupied"}
                  style={styles.cinemaTicketBig(item.picked)}
                  onPress={() => {
                    if (item.picked === "available") {
                    }
                    markTicketChosen(item.id);
                  }}
                >
                  <Text style={{ color: colors.darkText }}>
                    {item.picked === "available" || item.picked === "chosen"
                      ? item.number
                      : "x"}
                  </Text>
                </TouchableOpacity>
              );
            }}
            numColumns={10}
            contentContainerStyle={{ paddingHorizontal: 0 }}
          />
        </ScrollView>
      )}
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    dummyCinemaTickets: state.cinema.dummyCinemaTickets,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    markTicketChosen: (ticket_id) => dispatch(markTicketChosen(ticket_id)),
  };
};
const objectToExport = connect(mapStateToProps, mapDispatchToProps)(Ticket);

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
        : "#253554",
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
        : "#253554",
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
