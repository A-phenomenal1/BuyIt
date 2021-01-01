import React from "react";
import { StyleSheet } from "react-native";

import Colors from "../../config/Colors";
import AppText from "../AppText";
function ErrorMsg({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: {
    color: Colors.danger,
  },
});
export default ErrorMsg;
