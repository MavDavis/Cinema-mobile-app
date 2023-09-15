import {
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import styles from "../../globalStyles/styles";
import React from "react";
const Movie = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={item.img} />
      <Text style={styles.locationText}>{item.name}</Text>
    </View>
  );
};
const MovieList = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Movie item={item} />}
        keyExtractor={(item) => `data-${item.name}`}
      />
    </View>
  );
};

export default MovieList;
