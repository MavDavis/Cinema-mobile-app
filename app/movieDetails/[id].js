import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { addCinema } from "../../actions/types";

import { Stack, useRouter, useSearchParams } from "expo-router";
import styles from "../../globalStyles/styles";
import { colors, Vector } from "../../assets/index";
import React, { useEffect, useState } from "react";
import AppTab from "../../components/MovieDetail/AppTab";

const MovieDetails = ({ movies, addCinema }) => {
  const [movieObject, setMovieObject] = useState("");
  const router = useRouter();
  const params = useSearchParams();
  useEffect(() => {
    let item = movies.find((item) => item.id === params.id);
    setMovieObject(item);
    addCinema(item);
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
      <AppTab movie={movieObject} />
    </SafeAreaView>
  );
};
// Define mapStateToProps to access Redux state
const mapStateToProps = (state) => {
  return {
    movies: state.cinema.movies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCinema: (cinemaName) => dispatch(addCinema(cinemaName)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
