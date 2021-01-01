import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";
import TextStyle from "../config/TextStyle";

function AppTextInput({ logo, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {logo && (
        <MaterialCommunityIcons
          name={logo}
          size={20}
          color={Colors.medium}
          style={styles.logo}
        />
      )}
      <TextInput
        placeholderTextColor={Colors.medium}
        style={TextStyle.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    backgroundColor: Colors.light,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
    height: 60,
  },
  logo: {
    padding: 10,
  },
});
export default AppTextInput;
