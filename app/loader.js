import React, { useEffect } from "react";
import { Stack, useRouter } from "expo-router";

import {
  View,
  Stylesheet,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { colors } from "../assets/colors.js";
const Loader = () => {
  const router = useRouter();
  useEffect(() => {
    const delay = 3000;

    const timeoutId = setTimeout(() => {
      router.push("/pay");
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [router]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.darkBg }}>
      <StatusBar backgroundColor={colors.darkNav} barStyle="light-content" />
      <Stack.Screen
        options={{
          headerLeft: () => {},
          cardStyle: {
            marginBottom: 0,
            borderBottomWidth: 0,
          },
          headerStyle: { backgroundColor: colors.darkBg },
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerRight: () => {},
          headerTitle: () => {},
        }}
      />
      <View
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.darkNav} />
      </View>
    </SafeAreaView>
  );
};

export default Loader;
