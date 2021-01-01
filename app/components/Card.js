import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";
import Colors from "../config/Colors";
import AppText from "./AppText";

function Card({ imageUrl, title, subtitle, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          uri={imageUrl}
        />
        <View style={styles.info}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>${subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 10,
    backgroundColor: Colors.white,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },
  info: {
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: Colors.secondary,
  },
  title: {
    paddingBottom: 5,
  },
});
export default Card;
