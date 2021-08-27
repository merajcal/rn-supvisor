import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Button } from "react-native";


const Stack = createStackNavigator();

export const AppStack = () => {
 
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
       
      />
    </Stack.Navigator>
  );
};
