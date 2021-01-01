import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

import Colors from "../config/Colors";

function Loader({ visible = false, color = Colors.primary, style }) {
  if (!visible) return null;
  return (
    <View style={[styles.loading, style]}>
      <ActivityIndicator animating={visible} color={color} size="large" />
    </View>
  );
}
const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
    backgroundColor: Colors.medium,
    position: "absolute",
    height: "100%",
    justifyContent: "center",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});
export default Loader;
