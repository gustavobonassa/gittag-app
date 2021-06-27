/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import RepositoriesScreen from "../screens/Repositories/Repositories";
import SettingsScreen from "../screens/Settings/Settings";
import { BottomTabParamList, RepositoriesParamList, SettingsParamList } from "../types/types";
import { AntDesign, Octicons } from "@expo/vector-icons";
import store from "../system/Store";
import { observer } from "mobx-react";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  const colorScheme = store.theme;

  return (
    <BottomTab.Navigator
      initialRouteName="Repositories"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}>
      <BottomTab.Screen
        name="Repositories"
        component={RepositoriesNavigator}
        options={{
          tabBarIcon: ({ color }) => <Octicons name="repo" size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="setting" size={30} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const RepositoriesStack = createStackNavigator<RepositoriesParamList>();

function RepositoriesNavigator() {
  return (
    <RepositoriesStack.Navigator>
      <RepositoriesStack.Screen
        name="RepositoriesScreen"
        component={RepositoriesScreen}
        options={{ headerTitle: "Repositórios" }}
      />
    </RepositoriesStack.Navigator>
  );
}

const SettingsStack = createStackNavigator<SettingsParamList>();

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerTitle: "Configurações" }}
      />
    </SettingsStack.Navigator>
  );
}

export default observer(BottomTabNavigator);
