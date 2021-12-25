import * as React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import tailwind from "tailwind-rn";

export function PostSingleOverlay({ post }: any) {
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        position: "absolute",
        top: 64,

        zIndex: 999,
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View style={{ flexGrow: 1 }}>
        <Text>Header</Text>
      </View>
      <View style={{ flexGrow: 1 }}>
        <Text>Madin</Text>
      </View>
      <View>
        <Text>Footer</Text>
        <Text style={tailwind("text-3xl text-black")}>Title: {post.title}</Text>
      </View>
    </View>
  );
}
