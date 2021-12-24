import * as React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";

export default function WebMapView() {
  return (
    <View style={tailwind("p-5 pt-20 flex-1")}>
      <Text>Map</Text>
    </View>
  );
}
