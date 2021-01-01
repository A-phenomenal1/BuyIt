import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import ScreenTemp from "../components/ScreenTemp";
import ListItem from "../components/lists/ListItem";
import Colors from "../config/Colors";
import LogoTemp from "../components/LogoTemp";
import ItemsaperatorComp from "../components/lists/ItemsaperatorComp";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    subtitle: "5 Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.primary,
    },
  },
  {
    title: "My Messages",
    subtitle: "2 Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountWindow({ navigation }) {
  const { user, logOut } = useAuth();

  return (
    <ScreenTemp style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/mypic.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ItemsaperatorComp}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subtitle={item.subtitle}
              IconComponent={
                <LogoTemp
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<LogoTemp name="logout" backgroundColor="#ffc438" />}
        onPress={() => logOut()}
      />
    </ScreenTemp>
  );
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light,
  },
  container: {
    marginVertical: 5,
  },
});
export default AccountWindow;
