import * as React from "react";

import { withAuthenticator } from "aws-amplify-react-native";
import { Button, StyleSheet, Text, View } from "react-native";

import config from "./src/aws-exports";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";
import Amplify from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { listIncidents } from "./src/graphql/queries";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function HomeScreen({ navigation }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const result = await API.graphql(
          graphqlOperation(listIncidents, {
            limit: 10,
          })
        );

        setData(result.data.listIncidents.items);
      } catch (err) {
        console.log("error fetching data", err);
      }
    };
    getData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{data ? data.length : "none"}</Text>
      <Button
        title="Go to Other"
        onPress={() => navigation.navigate("Other")}
      />
    </View>
  );
}
function OtherScreen({ navigation }) {
  const videoPlayerRef = React.useRef();
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

// Later on in your styles..
var videoStyles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Other" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
