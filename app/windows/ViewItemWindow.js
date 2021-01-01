import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/Colors";

function ViewItemWindow(props) {
  return (
    <View style={styles.itemWindow}>
      <View style={styles.boxLeft}>
        <MaterialCommunityIcons name="close" size={35} color={colors.white} />
      </View>
      <View style={styles.boxRight}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color={colors.white}
        />
      </View>
      <Image style={styles.items} source={require("../assets/chair.jpg")} />
    </View>
  );
}
const styles = StyleSheet.create({
  itemWindow: {
    backgroundColor: "#000",
    flex: 1,
  },
  boxLeft: {
    position: "absolute",
    top: 30,
    left: 30,
  },
  boxRight: {
    position: "absolute",
    top: 30,
    right: 30,
  },
  items: {
    width: "100%",
    height: "70%",
    top: "15%",
    position: "absolute",
  },
});
export default ViewItemWindow;
