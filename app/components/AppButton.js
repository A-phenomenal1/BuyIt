import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../config/Colors";

function AppButton({ title, onPressEvent, btnColor = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors[btnColor] }]}
      onPress={onPressEvent}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    padding: 15,
    backgroundColor: Colors.secondary,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: Colors.white,
  },
});
export default AppButton;
