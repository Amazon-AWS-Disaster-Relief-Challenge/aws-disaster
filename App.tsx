import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed } from "./src/screens/Feed";
import { OtherScreen } from "./src/screens/OtherScreen";
import NewPost from "./src/screens/NewPost";
import config from "./src/aws-exports";
import Amplify from "aws-amplify";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const queryClient = new QueryClient();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Feed} />
          <Tab.Screen name="Other" component={OtherScreen} />
          <Tab.Screen name="NewPost" component={NewPost} />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default withAuthenticator(App);
