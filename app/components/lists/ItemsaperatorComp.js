import React from "react";
import { View, StyleSheet } from "react-native";

import Colors from "../../config/Colors";

function ItemsaperatorComp() {
  return <View style={styles.saperator} />;
}

const styles = StyleSheet.create({
  saperator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.light,
  },
});
export default ItemsaperatorComp;
