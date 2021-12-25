import * as React from "react";
import { Dimensions, Pressable, SafeAreaView, Text, View } from "react-native";
import tailwind from "tailwind-rn";

export function PostSingleOverlay({ post, stop, play, pause }: any) {
  return (
    <Pressable
      style={{
        width: Dimensions.get("window").width,
        position: "absolute",
        top: 64,
        zIndex: 999,
        flex: 1,
        flexDirection: "column",
        bottom: 0,
      }}
      // onPress={onPressFunction}
      onPressIn={() => pause()}
      onPressOut={() => play()}
    >
      <View style={tailwind("flex flex-row justify-between")}>
        <Pressable style={tailwind("p-5 flex-1")}>
          <Text style={{ color: "#fff" }}>Location</Text>
        </Pressable>
        <Pressable
          style={tailwind("p-5 flex-1")}
          onPressIn={() => console.log("XXXXXXXXX")}
        >
          <Text style={{ color: "#fff" }}>Donate Now</Text>
        </Pressable>
        <Pressable style={tailwind("p-5 flex-1")}>
          <Text style={{ color: "#fff", textAlign: "right" }}>Create Post</Text>
        </Pressable>
      </View>
      <View
        style={tailwind(
          "flex-grow flex-1 flex-col-reverse justify-start items-end py-5"
        )}
      >
        <Pressable style={tailwind("w-1/3 py-3")}>
          <Text style={{ color: "#fff" }}>People affected{"\n"}200</Text>
        </Pressable>
        <Pressable style={tailwind("w-1/3 py-3")}>
          <Text style={{ color: "#fff" }}>Category:{"\n"}Fire </Text>
        </Pressable>
        <Pressable style={tailwind("w-1/3 py-3")}>
          <Text style={{ color: "#fff" }}>Views{"\n"}2.k</Text>
        </Pressable>
        <Pressable style={tailwind("w-1/3 py-3")}>
          <Text style={{ color: "#fff" }}>Money Raised{"\n"}$2000</Text>
        </Pressable>
      </View>
      <View
        style={tailwind(
          "flex bg-black flex-row items-center justify-between pb-5"
        )}
      >
        <Pressable style={tailwind("p-5 flex-1")}>
          <Text style={{ textAlign: "left", color: "#fff" }}>{post.title}</Text>
        </Pressable>
        <Pressable style={tailwind("p-5 flex-1")}>
          <Text style={{ textAlign: "center", color: "#fff" }}>Feed</Text>
        </Pressable>
        <Pressable style={tailwind("px-5 flex flex-row flex-1 justify-center")}>
          <Text style={{ textAlign: "right", color: "#fff" }}>Settings</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
