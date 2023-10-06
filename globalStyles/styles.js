import { StyleSheet } from "react-native";
import { colors } from "../assets/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.darkText,
    backgroundColor: colors.darkBg,
  },
  flexContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    //justifyContent: "space-between",
    padding: 10,
  },

  darkText: {
    color: colors.darkText,
  },
  darkTextTwo: {
    color: colors.darkTextTwo,
    marginTop: 4,
  },
  card: {
    width: "48%",
    backgroundColor: "lightblue",
    borderRadius: 10,
    marginVertical: 5,
    position: "relative",
    //justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    position: "relative",
    alignSelf: "center",
    maxWidth: "100%",
  },
  Navbar: {
    flexDirection: "row",
    marginLeft: 16,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  location: {
    height: 40,
    padding: "16px 8px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  locationText: {
    color: colors.darkText,
    //font-family: PT Root UI;
    fontSize: 14,
    fontWeight: "700",
  },
  searchbarText: {
    color: colors.darkText,
    fontSize: 20,
    fontWeight: "700",
  },

  NavbarFlex: {
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: 16,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  loginButton: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: colors.orange,
    color: colors.darkText,
    //boxShadow: "0px 4px 16px 0px rgba(255, 128, 54, 0.25",
  },
  searchbar: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  AppTab: {
    backgroundColor: colors.darkNav,
    width: "100%",
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
    overflowX: "auto",
    whiteSpace: "nowrap",
    marginTop: 0,
    borderWidth: 0,
  },
  AppTabTextContainer: (boolean) => ({
    flex: 1,
    textAlign: "center",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderBottomColor: !boolean ? colors.darkNav : colors.orange,
  }),
  AppTabText: (boolean) => ({
    color: !boolean ? colors.darkTextTwo : colors.orange,
    fontSize: 16,
    textAlign: "center",
  }),
  overlay: {
    alignItems: "center",
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject, // Position the overlay absolutely to cover the entire container
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black color
  },
  playContainer: {
    padding: 10,
    backgroundColor: colors.darkBg,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  ratings: {
    backgroundColor: colors.darkNav,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rating: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  ratingText1: {
    color: colors.darkText,
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  movieDescription: {
    color: colors.darkText,
    fontSize: 14,
    lineHeight: 18,
  },
  ratingText2: {
    color: colors.darkTextTwo,
    fontSize: 16,
    textAlign: "center",
  },
  movieDescTitle: {
    width: "70%",
    textAlign: "left",
    color: colors.darkText,
    fontSize: 14,
    lineHeight: 18,

    fontWeight: "400",
  },
  movieTitleRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  movieTitle: {
    lineHeight: 18,

    color: colors.darkTextTwo,
    fontSize: 14,
    fontWeight: "500",
  },
  sessionHeader: {
    color: colors.darkText,
    marginTop: 4,
    fontSize: 14,
    fontWeight: "700",
  },
  sessionHeaderTwo: {
    color: colors.darkTextTwo,
    fontSize: 14,
    fontWeight: "500",
    width: "18%",
  },
  cinemaViewHeadButtons: {
    padding: 8,
    borderColor: colors.darkTextTwo,
    borderWidth: 0.5,
    width: "45%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cinemaViewHeadButtonsText: {
    marginLeft: 4,
    color: colors.darkText,
    fontWeight: "700",
  },
  circleBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  circleItem: {},
  circle: (item) => ({
    width: 16,
    height: 16,
    padding: 4,
    borderRadius: 9999,
    marginRight: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:
      item === "Chosen" ? colors.orange : " rgba(109, 158, 255, 0.10)",
  }),
  circleText: {
    color: colors.darkText,
    fontWeight: "500",
  },
});
export default styles;
