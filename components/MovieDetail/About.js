import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Play, colors } from "../../assets";
import styles from "../../globalStyles/styles";
import AppButton from "../global/AppButton";

const About = ({ movie, handlePressFunc }) => {
  return (
    <View>
      <View
        style={{
          with: "100%",
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.4,
        }}
      >
        <Image style={{ flex: 1, resizeMode: "cover" }} source={movie.img} />
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.playContainer}>
            <Image source={Play} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.ratings}>
        <View style={styles.rating}>
          <Text style={styles.ratingText1}>{movie.imdb_rating}</Text>
          <Text style={styles.ratingText2}>IMDB</Text>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText1}>{movie.kinopoisk_rating}</Text>
          <Text style={styles.ratingText2}>Kinopoisk</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 12, marginVertical: 16 }}>
        <Text style={styles.movieDescription}>{movie.description}</Text>
      </View>
      <View style={{ width: "100%", padding: 12 }}>
        <View style={styles.movieTitleRow}>
          <Text style={styles.movieTitle}>Certificate</Text>
          <Text style={styles.movieDescTitle}>{movie.certificate}</Text>
        </View>
        <View style={styles.movieTitleRow}>
          <Text style={styles.movieTitle}>Runtime</Text>
          <Text style={styles.movieDescTitle}>{movie.runtime}</Text>
        </View>
        <View style={styles.movieTitleRow}>
          <Text style={styles.movieTitle}>Title</Text>
          <Text style={styles.movieDescTitle}>{movie.name}</Text>
        </View>
        <View style={styles.movieTitleRow}>
          <Text style={styles.movieTitle}>Release</Text>
          <Text style={styles.movieDescTitle}>{movie.release_date}</Text>
        </View>
        <View style={styles.movieTitleRow}>
          <Text style={styles.movieTitle}>Genre</Text>
          <Text style={styles.movieDescTitle}>{movie.genre}</Text>
        </View>
        <View style={styles.movieTitleRow}>
          <Text style={styles.movieTitle}>Director</Text>
          <Text style={styles.movieDescTitle}>{movie.director}</Text>
        </View>
        <View style={styles.movieTitleRow}>
          <Text style={styles.movieTitle}>Cast</Text>
          <Text style={styles.movieDescTitle}>{movie.cast}</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 12 }}>
        <AppButton
          handlePress={() => {
            handlePressFunc();
          }}
          bgColor={colors.orange}
          textColor={colors.darkText}
          text="Select session"
        />
      </View>
    </View>
  );
};

export default About;
