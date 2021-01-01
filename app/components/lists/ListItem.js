import React from "react";
import { Image, StyleSheet, View, TouchableHighlight } from "react-native";
import Swipable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import Colors from "../../config/Colors";

function ListItem({
  image,
  IconComponent,
  onPress,
  renderRightActions,
  subtitle,
  title,
}) {
  return (
    <Swipable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subtitle && (
              <AppText style={styles.subtitle} numberOfLines={2}>
                {subtitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={Colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: Colors.white,
    alignItems: "center",
  },
  detailContainer: {
    marginLeft: 15,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "200",
    color: Colors.medium,
  },
  title: {
    fontWeight: "600",
    color: Colors.black,
  },
});
export default ListItem;
