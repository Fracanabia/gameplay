import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { theme } from "../global/styles/theme";
import { AppointmentCreate } from "../screens/AppointmentCreate";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="Home" component={Home}></Screen>

      <Screen name="AppointmentDetails" component={AppointmentDetails}></Screen>

      <Screen name="AppointmentCreate" component={AppointmentCreate}></Screen>
    </Navigator>
  );
}
