import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useAuth } from "../contexts/Auth";
import { Loading } from "../components/Loading";
import { Dimensions, View } from "react-native";
import { enableScreens } from 'react-native-screens';
import MyDrawer from "../screens/Drawer";

enableScreens(true);
export const Router = () => {
  const { authData, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }
  return (
    <NavigationContainer>
      {authData ?  <MyDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
