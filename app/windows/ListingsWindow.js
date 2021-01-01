import React, { useEffect } from "react";
import ScreenTemp from "../components/ScreenTemp";
import { FlatList, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import Colors from "../config/Colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Loader from "../components/Loader";
import useApi from "../hooks/useApi";
import HeadBar from "../components/HeadBar";

function ListingsWindow({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  );
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <Loader visible={loading} style={styles.loading} />
      <View style={styles.head}>
        <HeadBar />
      </View>
      <ScreenTemp style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <View style={styles.list}>
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subtitle={item.price}
                imageUrl={item.images[0].url}
                onPress={() => navigation.navigate(routes.ITEM_DETAILS, item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )}
          />
        </View>
      </ScreenTemp>
    </>
  );
}
const styles = StyleSheet.create({
  head: {
    marginTop: Constants.statusBarHeight,
  },
  loading: {
    backgroundColor: Colors.light,
  },
  list: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  screen: {
    backgroundColor: Colors.light,
  },
});
export default ListingsWindow;
