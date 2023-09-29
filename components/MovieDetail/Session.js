import { Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Calendar, Sort, colors } from "../../assets";
import styles from "../../globalStyles/styles";
import AppCheckbox from "../global/AppCheckbox";

import AnimatedAvailability from "./AnimatedAvailability";
const Session = ({ movie, handlepress }) => {
  const currentDate = new Date();
  const options = { month: "long" };
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  // Use the toLocaleString method with the options to get the current month in words
  const currentMonth = currentDate.toLocaleString(undefined, options);
  const currentDay = currentDate.getDate();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 12,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={Calendar} />

          <Text style={styles.sessionHeader}>
            {currentMonth.slice(0, 4)},{currentDay}
          </Text>
        </View>
        <View style={{}}>
          <Image source={Sort} />
          <Text style={styles.sessionHeader}>Time ↑</Text>
        </View>
        <View style={{}}>
          <AppCheckbox isChecked={isChecked} toggleCheckbox={toggleCheckbox} />
          <Text style={styles.sessionHeader}>By Cinema</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colors.darkNav,
          padding: 12,
        }}
      >
        <Text style={{ ...styles.sessionHeaderTwo, width: "25%" }}>Time</Text>
        <Text style={styles.sessionHeaderTwo}>Adult</Text>
        <Text style={styles.sessionHeaderTwo}>Child</Text>
        <Text style={styles.sessionHeaderTwo}>Student</Text>
        <Text style={styles.sessionHeaderTwo}>VIP</Text>
      </View>
      <ScrollView>
        <AnimatedAvailability
          isChecked={isChecked}
          movie={movie}
          handlepress={handlepress}
        />
      </ScrollView>
    </View>
  );
};

export default Session;
