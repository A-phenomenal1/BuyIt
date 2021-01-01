import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/AppText";
import Colors from "../config/Colors";
import ListItem from "../components/lists/ListItem";
import ScreenTemp from "../components/ScreenTemp";
import ContactSellerForm from "../components/ContactSellerForm";

function ItemDetailsWindow({ route }) {
  const listing = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ScreenTemp>
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.seller}>
            <ListItem
              image={require("../assets/mypic.jpg")}
              title="Nitesh Kumar"
              subtitle="5 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </ScreenTemp>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 215,
  },
  price: {
    color: Colors.secondary,
    marginVertical: 10,
    fontWeight: "600",
    fontSize: 18,
  },
  seller: {
    marginVertical: 5,
    marginLeft: -20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
});
export default ItemDetailsWindow;
