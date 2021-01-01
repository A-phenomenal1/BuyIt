import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import Colors from "../config/Colors";
import AppText from "./AppText";

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: "center",
    width: "110%",
    position: "absolute",
    zIndex: 1,
    //marginTop: Constants.statusBarHeight,
  },
  text: {
    color: Colors.white,
  },
});

export default OfflineNotice;
