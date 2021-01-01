import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Colors from "../config/Colors";

function HeadBar() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-blue2.png")} style={styles.logo} />
      <Text style={styles.text}>
        BUY<Text style={(styles.text, { color: Colors.danger })}>IT</Text>
      </Text>
      <View style={styles.space} />
      <Image
        source={require("../assets/mypic.jpg")}
        style={styles.accountHolder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 60,
    paddingLeft: 12,
    position: "relative",
    width: "100%",
    top: 0,
    zIndex: 1,
  },
  space: {
    flex: 1,
  },
  accountHolder: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: Colors.primary,
    borderWidth: 2,
    marginRight: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#147efb",
    paddingLeft: 8,
  },
});

export default HeadBar;
