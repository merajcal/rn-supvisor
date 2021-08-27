import React, { useEffect, useState } from "react";
import { Router } from "./routes/Router";
import { AuthProvider } from "./contexts/Auth";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
