import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// home
import BottomTabNavigator from "./BottomTabNavigator";

// settings
import SettingsLanguageScreen from "../screens/settings/SettingsLanguageScreen";

const Nav = createStackNavigator();

export default function StackNavigator() {
  return (
    <Nav.Navigator>
      <Nav.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Nav.Screen
        name="SettingsLanguageScreen"
        component={SettingsLanguageScreen}
      />
    </Nav.Navigator>
  );
}
