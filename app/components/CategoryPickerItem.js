import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import LogoTemp from "./LogoTemp";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.conainer}>
      <TouchableOpacity onPress={onPress}>
        <LogoTemp
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={70}
        />
      </TouchableOpacity>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  conainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
