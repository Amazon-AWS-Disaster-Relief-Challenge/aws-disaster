import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import NewPost from "../screens/NewPost";
import OtherScreen from "../screens/OtherScreen";

export const Tab = createBottomTabNavigator();
export default function MainRoute() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Feed} />
        <Tab.Screen name="Other" component={OtherScreen} />
        <Tab.Screen name="NewPost" component={NewPost} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
