import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import createPost from "../screens/createPost";
import Map from "../screens/Map";
import { Feather } from "@expo/vector-icons";
export const Tab = createBottomTabNavigator();

export default function MainRoute() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="feed"
      tabBar={() => <></>}
    >
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
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="order"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="comment"
        component={createPost}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="createPost"
        component={createPost}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="plus-square" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
