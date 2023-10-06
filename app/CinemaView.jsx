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
import { colors, Vector, Enlarge, Compress } from "../assets";
import { Stack, useRouter } from "expo-router";
const CinemaView = ({ cinema, currentMovie }) => {
  const router = useRouter();
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
