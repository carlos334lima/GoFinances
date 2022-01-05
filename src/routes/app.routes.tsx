import React from "react";

//@libraries
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//@screens
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { Resume } from "../screens/Resume";

//@styles
import theme from "../styles/theme";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: "beside-icon",
        tabBarIconStyle: {
          /* paddingVertical: Platform.OS === "ios" ? 20 : 0, */
          height: 88,
        },
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted-triangle"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="attach-money" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
