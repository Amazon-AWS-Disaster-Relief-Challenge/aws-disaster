import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions, Platform, Text } from "react-native";
import WebMapView from "../components/WebMapView";

export default function Map() {
  return (
    <View style={styles.container}>
      {Platform.OS === "web" ? <WebMapView /> : <MapView style={styles.map} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
