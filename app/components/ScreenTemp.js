import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import OfflineNotice from "./OfflineNotice";

function ScreenTemp({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <OfflineNotice />
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default ScreenTemp;
