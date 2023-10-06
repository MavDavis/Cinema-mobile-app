import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

import { connect } from "react-redux";
import styles from "../globalStyles/styles";
import { colors, Vector, Enlarge, Compress, Calendar, Clock } from "../assets";
import { Stack, useRouter } from "expo-router";
import FilterBy from "../components/CinemaView/Headers";
import Ticket from "../components/CinemaView/Ticket";
const CinemaView = ({ cinema, currentMovie }) => {
  const router = useRouter();
  const currentDate = new Date();
  const options = { month: "long" };
  const currentMonth = currentDate.toLocaleString(undefined, options);
  const currentDay = currentDate.getDate();
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handlePress = () => {
    router.back();
  };
  handleEnlarging = () => {
    setIsEnlarged(isEnlarged ? false : true);
  };
  const CustomHeaderCenter = () => {
    return (
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text style={styles.locationText}>{cinema.name}</Text>
        <Text style={styles.darkTextTwo}>{currentMovie.name}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.darkBg }}>
      <StatusBar backgroundColor={colors.darkNav} barStyle="light-content" />

      <Stack.Screen
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity onPress={handlePress}>
                <Image source={Vector} />
              </TouchableOpacity>
            );
          },
          cardStyle: {
            marginBottom: 0,
            borderBottomWidth: 0,
          },
          headerStyle: { backgroundColor: colors.darkNav },
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerRight: () => {
            return (
              <TouchableOpacity onPress={handleEnlarging}>
                <Image source={!isEnlarged ? Enlarge : Compress} />
              </TouchableOpacity>
            );
          },
          headerTitle: () => <CustomHeaderCenter />,
        }}
      />
      <View
        style={{
          backgroundColor: colors.darkNav,
          paddingHorizontal: 8,
          paddingVertical: 16,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity style={styles.cinemaViewHeadButtons}>
          <Image source={Calendar} />
          <Text style={styles.cinemaViewHeadButtonsText}>
            {currentMonth.slice(0, 4)},{currentDay}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cinemaViewHeadButtons}>
          <Image source={Clock} />
          <Text style={styles.cinemaViewHeadButtonsText}>{cinema.time}</Text>
        </TouchableOpacity>
      </View>
      <FilterBy />
      <Ticket />
    </SafeAreaView>
  );
};
const mapStateToProps = (state) => {
  return {
    cinema: state.cinema.cinema,
    currentMovie: state.cinema.currentMovie,
  };
};
const ConnectedCinemaView = connect(mapStateToProps)(CinemaView);

export default ConnectedCinemaView;
