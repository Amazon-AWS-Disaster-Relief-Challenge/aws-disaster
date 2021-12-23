import * as React from "react";
import { Button, View } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

export function OtherScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Text>OtherScreen Screen</Text> */}
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
          source: {
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
        }}
      />
    </View>
  );
}
