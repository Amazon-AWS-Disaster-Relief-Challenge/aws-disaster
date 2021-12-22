import { StatusBar } from "expo-status-bar";
import { withAuthenticator } from "aws-amplify-react-native";
import { StyleSheet, Text, View } from "react-native";
import Amplify from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
