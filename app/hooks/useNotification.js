import { useEffect } from "react";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";

import expoPushTokenApi from "../api/expoPushToken";
export const useNotification = (notificationListner) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListner) Notifications.addListener(notificationListner);
  }, []);
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log("Error in Push Token", error);
    }
  };
};
