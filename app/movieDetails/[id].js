import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import Vector from "../../assets/images/Vector.png";
import React from "react";

const MovieDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "" }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "" },
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity onpress={() => router.back()}>
              <Image source={Vector} />
            </TouchableOpacity>
            // <ScreenHeaderBtn
            //   iconUrl={icons.left}
            //   dimension="60%"
            //   handlePress={() => router.back()}
            // />
          ),
          headerTitle: "",
        }}
      />
    </SafeAreaView>
  );
};

export default MovieDetails;
