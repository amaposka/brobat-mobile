import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import HomeTabScreen from "../screens/home/HomeTabScreen";
import FeedTabScreen from "../screens/home/FeedTabScreen";
import NotificationTabScreen from "../screens/home/NotificationTabScreen";
import SettingsTabScreen from "../screens/home/SettingsTabScreen";

const Nav = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Nav.Navigator>
      <Nav.Screen
        name="home"
        component={HomeTabScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-home" color={color} size={size} />
          ),
        }}
      />
      <Nav.Screen
        name="feed"
        component={FeedTabScreen}
        options={{
          title: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Icon name="logo-rss" color={color} size={size} />
          ),
        }}
      />
      <Nav.Screen
        name="notification"
        component={NotificationTabScreen}
        options={{
          title: "Notification",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-notifications" color={color} size={size} />
          ),
        }}
      />
      <Nav.Screen
        name="settings"
        component={SettingsTabScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-settings" color={color} size={size} />
          ),
        }}
      />
    </Nav.Navigator>
  );
}
