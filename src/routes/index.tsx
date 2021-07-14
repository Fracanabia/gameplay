import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useAuth } from "../hooks/auth";
import { SignIn } from "../screens/Signin";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
