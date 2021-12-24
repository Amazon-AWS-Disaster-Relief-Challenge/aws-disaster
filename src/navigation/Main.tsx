import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import NewPost from "../screens/NewPost";
import DisasterHeatmap from "../screens/DisasterHeatmap";

export const Tab = createBottomTabNavigator();

export default function MainRoute() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="feed" component={Feed} />
      <Tab.Screen name="map" component={DisasterHeatmap} />
      <Tab.Screen name="newPost" component={NewPost} />
    </Tab.Navigator>
  );
}
