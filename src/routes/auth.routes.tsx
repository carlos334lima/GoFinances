import React from "react";

//@libraries
import { createStackNavigator } from "@react-navigation/stack";

//@screens
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
}
