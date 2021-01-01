import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitBtn,
} from "../components/forms";
import ScreenTemp from "../components/ScreenTemp";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Colors from "../config/Colors";
import FormImagePicker from "../components/forms/FormImagePicker";
import listingsApi from "../api/listings";
import useLocation from "../hooks/useLocation";
import UploadWindow from "./UploadWindow";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least 1 image"),
});
const categories = [
  { backgroundColor: "#FF69B4", icon: "lamp", label: "Furniture", value: 1 },
  { backgroundColor: "#87CEFA", icon: "tshirt-v", label: "Clothing", value: 2 },
  { backgroundColor: "#DB7093", icon: "camera", label: "Camera", value: 3 },
  { backgroundColor: "#FFA07A", icon: "car", label: "Car", value: 4 },
  {
    backgroundColor: "#CD5C5C",
    icon: "cellphone-android",
    label: "Smart phones",
    value: 5,
  },
  { backgroundColor: "#D2691E", icon: "book", label: "Books", value: 6 },
  {
    backgroundColor: "#6495ED",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  { backgroundColor: "#DEB887", icon: "baseball", label: "Sports", value: 8 },
  { backgroundColor: "#8A2BE2", icon: "wallet", label: "others", value: 9 },
];
function ListingEditWindow() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const sleep = (milliseconds) => {
    const start = Date.now();
    let current = null;
    do {
      current = Date.now();
    } while (current - start < milliseconds);
  };

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (result.ok) {
      return alert("Couldn't Upload the Item!!!!");
    }
    sleep(1100);
    setUploadVisible(false);
    resetForm();
  };
  return (
    <ScreenTemp style={styles.screen}>
      <UploadWindow progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField
          keyboardType="default"
          maxLength={255}
          name="title"
          placeholder="Title"
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width={180}
        />
        <AppFormField
          keyboardType="default"
          maxLength={255}
          multiline={true}
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitBtn title="Post" />
      </AppForm>
    </ScreenTemp>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 15,
    marginVertical: 20,
  },
  cameraIcon: {
    display: "flex",
    width: 85,
    height: 85,
    borderRadius: 20,
    backgroundColor: Colors.light,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ListingEditWindow;
