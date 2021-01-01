import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import Colors from "../config/Colors";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    requestPermission();
  }, []);
  const requestPermission = async () => {
    const { granted } = await ImagePicker.getCameraRollPermissionsAsync();
    if (granted) {
      alert("You have to give camera permission");
    }
  };
  const handleSubmit = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are You Sure to Delete the image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error in getting Image", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleSubmit}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={Colors.medium}
            backgroundColor={Colors.light}
            size={40}
            name="camera"
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
