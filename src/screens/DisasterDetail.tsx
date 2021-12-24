import * as React from "react";
import { Button, View, Text } from "react-native";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function OtherScreen({ navigation }: ScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Disaster Heatmap</Text>
    </View>
  );
}
