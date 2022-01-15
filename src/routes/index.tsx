import React from "react";

//@libraries
import { NavigationContainer } from "@react-navigation/native";

//@routes
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

//@utils
import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
