import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function LogoTemp({
  name,
  size = 40,
  backgroundColor = "#000",
  color = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        size={size / 2}
        color={color}
        backgroundColor={backgroundColor}
      />
    </View>
  );
}

export default LogoTemp;
