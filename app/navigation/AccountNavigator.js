import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountWindow from "../windows/AccountWindow";
import MessageWindow from "../windows/MessageWindow";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Account" component={AccountWindow} />
    <Stack.Screen name="Messages" component={MessageWindow} />
  </Stack.Navigator>
);

export default AccountNavigator;
