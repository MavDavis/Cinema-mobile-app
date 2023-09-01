import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styles from "../globalStyles/styles";
import React, { useState } from "react";
import { Stack } from "expo-router";
import dummy_data from "../assets/dummy";
import {
  colors,
  Logo,
  darkLanguage,
  darkLocation,
  darkSearch,
} from "../assets/index";
import { ScrollView, TextInput } from "react-native-gesture-handler";
const index = () => {
  const [user, setUser] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.darkNav} barStyle="light-content" />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Image source={Logo} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.darkText}>Login</Text>
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: colors.darkNav },
          headerTitle: () => (
            <View style={styles.NavbarFlex}>
              <TouchableOpacity style={{ ...styles.location, marginRight: 16 }}>
                <Image source={darkLocation} />
                <Text style={styles.locationText}>Nigeria</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.location}>
                <Image source={darkLanguage} />
                <Text style={styles.locationText}>Eng</Text>
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <View style={styles.searchbar}>
        <Text style={styles.searchbarText}>Now in cinemas</Text>
        <TouchableOpacity>
          <Image source={darkSearch} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.card}>
          {dummy_data.map((item) => (
            <View key={`data-${item.name}`} style={styles.card}>
              <Image style={styles.cardImage} source={item.img} />
              <Text>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
