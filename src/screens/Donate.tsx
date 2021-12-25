import * as React from "react";
import { View, Text, Pressable } from "react-native";

const orders = [
  {
    id: 1,
    title: "Order 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Order 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Order 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function Donate({ navigation }: ScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text>Incident</Text>
      </View>
      <View>
        <Text>UNTITLED</Text>
      </View>
      {orders.map((order, index) => {
        return (
          <Pressable
            key={index}
            onPress={() => navigation.navigate("order", { order })}
          >
            <Text>{order.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
