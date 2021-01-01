import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../config/Colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={Colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ItemDeleteAction;
