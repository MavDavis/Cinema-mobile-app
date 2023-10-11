import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";

import { connect } from "react-redux";
import styles from "../globalStyles/styles";
import { colors, Vector, Enlarge, Compress, Calendar, Clock } from "../assets";
import { Stack, useRouter } from "expo-router";
import Ticket from "../components/CinemaView/Ticket";
import AppButton from "../components/global/AppButton";
const Pay = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("/CinemaView");
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
          headerRight: () => {},
          headerTitle: () => (
            <Text style={styles.locationText}>Pay for tickets</Text>
          ),
        }}
      />
    </SafeAreaView>
  );
};

export default Pay;
