import { Dimensions, StyleSheet } from "react-native";
import { gray,primary } from "../../constants/color";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  callout: {
    width: 250,
  },
  name: {
    fontWeight: 'bold',
  },
  amount: {
  },
  buttonSubscription: {
    marginTop: 15,
    elevation: 3,
    backgroundColor: primary,
  }
});