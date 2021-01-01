import React from "react";
import * as Progress from "react-native-progress";
import { View, StyleSheet, Modal, Image } from "react-native";

import Colors from "../config/Colors";

function UploadWindow({ progress = 0, visible = "false" }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={Colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <Image
            source={require("../assets/done.png")}
            style={{ width: 100, height: 100 }}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default UploadWindow;
