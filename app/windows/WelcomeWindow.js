import React from "react";
import { ImageBackground, StyleSheet, Image, View, Text } from "react-native";

import AppButton from "../components/AppButton";
import Colors from "../config/Colors";
import routes from "../navigation/routes";

function WelcomeWindow({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/background1.jpg")}
    >
      <View style={styles.imgcontainer}>
        <Image
          style={styles.img}
          source={require("../assets/logo-blue2.png")}
        />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.btnContainer}>
        <AppButton
          title="Login"
          onPressEvent={() => navigation.navigate(routes.LOGIN)}
          btnColor="primary"
        />
        <AppButton
          title="Register"
          onPressEvent={() => navigation.navigate(routes.REGISTER)}
          btnColor="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  imgcontainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  btnContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 10,
    color: Colors.dark,
  },
});

export default WelcomeWindow;
