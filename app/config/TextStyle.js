import { Platform } from "react-native";

import Colors from "./Colors";

export default {
  text: {
    color: Colors.dark,
    fontSize: 17,
    fontFamily: Platform.OS === "android" ? "Roboto" : "San Francisco",
  },
};
