import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GridView from "./GridView";
import Dashboard from "./Dashboard";
import { NavigationContainer } from "@react-navigation/native";


const columns = <FontAwesome5 name={"columns"} color="#000" size={18} />;
const tachometer = <FontAwesome5 name={"tachometer-alt"} color="#000" size={18} />;
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen name="Dashboard" component={Dashboard} 
      options={{
        tabBarIcon: ({ color, size }) => (
          tachometer
        ),
      }}/>
      <Tab.Screen name="Team Performance" component={GridView} 
      options={{
        tabBarIcon: ({ color, size }) => (
          columns
        ),
      }}/>
      
    </Tab.Navigator>
  );
};

export default HomeScreen;
