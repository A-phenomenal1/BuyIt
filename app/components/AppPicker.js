import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Button,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

function AppPicker({
  items,
  logo,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={[styles.container, { width }]}>
          {logo && (
            <MaterialCommunityIcons
              name={logo}
              size={20}
              color={Colors.medium}
              style={styles.logo}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={Colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View>
          <View style={styles.button}>
            <Button
              title="Close"
              color={Colors.secondary}
              onPress={() => setModalVisible(false)}
            />
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    padding: 15,
    marginVertical: 10,
  },
  container: {
    borderRadius: 25,
    backgroundColor: Colors.light,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  logo: {
    padding: 10,
  },
  placeholder: {
    color: Colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
export default AppPicker;
