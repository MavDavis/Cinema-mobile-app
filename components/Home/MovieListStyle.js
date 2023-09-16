import { StyleSheet } from "react-native";
import { colors } from "../../assets";
const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderWidth: 0.6,
    width: "95%",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "flex-start",
    minHeight: 200,
    cursor: "pointer",
  },
  imageContainer: {
    position: "relative",
    height: 164,
    width: "100%",
    minWidth: "100%",
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    elevation: 2,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

    borderRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  content: {
    marginTop: 4,
    fontSize: 18,
    color: colors.darkTextTwo,
  },
  title: {
    fontSize: 18,
    color: colors.darkText,
    fontWeight: "bold",
  },

  absoluteText: (number) => ({
    position: "absolute",
    top: 0,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 8,
    color: colors.darkText,
    backgroundColor: Number(number) > 5 ? colors.orange : colors.darkNav,
    zIndex: 22,
    right: 0,
  }),
});
export default styles;
