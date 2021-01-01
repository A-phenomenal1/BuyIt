import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsWindow from "../windows/ListingsWindow";
import ItemDetailsWindow from "../windows/ItemDetailsWindow";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listings"
      component={ListingsWindow}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ItemDetails" component={ItemDetailsWindow} />
  </Stack.Navigator>
);

export default FeedNavigator;
