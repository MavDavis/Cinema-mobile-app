import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import styles from "../../globalStyles/styles";
import { colors } from "../../assets/index";
import Vector from "../../assets/images/Vector.png";
import dummy_data from "../../assets/dummy";
import React, { useEffect, useState } from "react";
import AppTab from "../../components/MovieDetail/AppTab";

const MovieDetails = () => {
  const [movieObject, setMovieObject] = useState("");
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    let item = dummy_data.find((item) => item.id === params.id);
    setMovieObject(item);
  }, []);
  const handlePress = () => {
    router.back();
  };
  const CustomHeaderCenter = () => {
    return <Text style={styles.locationText}>{movieObject.name}</Text>;
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

          headerTitle: () => <CustomHeaderCenter />,
        }}
      />
      <AppTab
        movie={movieObject}
        handlePress={() => {
          console.log("hy");
        }}
      />
    </SafeAreaView>
  );
};

export default MovieDetails;
