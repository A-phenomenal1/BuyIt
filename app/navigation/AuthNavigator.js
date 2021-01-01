import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginWindow from "../windows/LoginWindow";
import RegisterWindow from "../windows/RegisterWindow";
import WelcomeWindow from "../windows/WelcomeWindow";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeWindow}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginWindow} />
    <Stack.Screen name="Register" component={RegisterWindow} />
  </Stack.Navigator>
);

export default AuthNavigator;
