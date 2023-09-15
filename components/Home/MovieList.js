import { View, Text, FlatList, TextInput, Image } from "react-native";
import styles from "./MovieListStyle";
const Movie = ({ item }) => {
  return (
    <View style={{ width: "50%" }}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Text style={styles.absoluteText(item.ximdb_rating)}>
            {item.imdb_rating}
          </Text>
          <Image style={styles.image} source={item.img} resizeMode="cover" />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.content}>{item.genre}</Text>
        </View>
      </View>
    </View>
  );
};
const MovieList = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={Movie}
        contentContainerStyle={{ paddingHorizontal: 0 }}
        numColumns={2}
      />
    </View>
  );
};

export default MovieList;
