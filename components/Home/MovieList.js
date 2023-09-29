import {
  View,
  Text,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { router, useRouter } from "expo-router";

import styles from "./MovieListStyle";
const Movie = ({ item }) => {
  return (
    <View style={{ width: "50%" }}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => {
          router.push(`movieDetails/${item.id}`);
        }}
      >
        <View style={styles.imageContainer}>
          <Text style={styles.absoluteText(item.imdb_rating)}>
            {item.imdb_rating}
          </Text>
          <Image style={styles.image} source={item.img} resizeMode="cover" />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.content}>{item.genre}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const MovieList = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={Movie}
        contentContainerStyle={{ paddingHorizontal: 0 }}
        numColumns={2}
      />
    </View>
  );
};

export default MovieList;
