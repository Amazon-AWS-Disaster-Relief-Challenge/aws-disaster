import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./screens/HomeScreen";
import { OtherScreen } from "./screens/OtherScreen";
import NewPost from "./screens/NewPost";
import UploadVideo from "./screens/UploadVideo";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { QueryClient, QueryClientProvider } from "react-query";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Other" component={OtherScreen} />
          <Stack.Screen name="NewPost" component={NewPost} />
          <Stack.Screen name="UploadVideo" component={UploadVideo} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default withAuthenticator(App);
