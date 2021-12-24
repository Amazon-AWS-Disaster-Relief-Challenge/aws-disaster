import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import NewPost from "../screens/NewPost";
import DisasterHeatmap from "../screens/DisasterHeatmap";
import { Feather } from "@expo/vector-icons";
export const Tab = createBottomTabNavigator();

export default function MainRoute() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="map"
        component={DisasterHeatmap}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="newPost"
        component={NewPost}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus-square" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
