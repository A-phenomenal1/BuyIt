import { AsyncStorage } from "@react-native-community/async-storage";
import moment from "moment";

const prefix = "cache";
const store = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > 10;
};
const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
