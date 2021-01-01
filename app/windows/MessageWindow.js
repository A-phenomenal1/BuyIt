import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import ListItem from "../components/lists/ListItem";
import ItemsaperatorComp from "../components/lists/ItemsaperatorComp";
import ListItemDeleteActions from "../components/lists/ListItemDeleteAction";
import Screen from "../components/ScreenTemp";

const initialMessages = [
  {
    id: 1,
    title: "Nitesh Kumar",
    description: "Hey! Is this item still Available for selling?",
    image: require("../assets/mypic.jpg"),
  },
  {
    id: 2,
    title: "Nitesh Kumar",
    description: "Hi, I am intrested in this item. When will you send it?",
    image: require("../assets/mypic.jpg"),
  },
];
function MessageWindow() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("pressed", item)}
            renderRightActions={() => (
              <ListItemDeleteActions onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ItemsaperatorComp}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Nitesh Kumar",
              description: "Hey! Is this item still Available for selling?",
              image: require("../assets/mypic.jpg"),
            },
            {
              id: 2,
              title: "Nitesh Kumar",
              description:
                "Hi, I am intrested in this item. When will you send it?",
              image: require("../assets/mypic.jpg"),
            },
            {
              id: 3,
              title: "Nitesh Kumar",
              description: "It's Condition is too good, as expected. Thanks!",
              image: require("../assets/mypic.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default MessageWindow;
