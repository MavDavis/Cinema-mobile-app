import { StyleSheet } from "react-native";
import { colors } from "../assets/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.darkText,
    backgroundColor: colors.darkBg,
  },
  darkText: {
    color: colors.darkText,
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
    fontWeights: 700,
  },
  searchbarText: {
    color: colors.darkText,
    fontSize: 20,
    fontWeights: 700,
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
});
export default styles;
