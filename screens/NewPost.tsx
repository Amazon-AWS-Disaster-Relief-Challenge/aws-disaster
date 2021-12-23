import * as React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function HomeScreen({ navigation }: ScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Text>Hello New Post</Text>
    </View>
  );
}
