import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useChewy,
  Chewy_400Regular,
} from "@expo-google-fonts/chewy";
import { useFonts as useItim, Itim_400Regular } from "@expo-google-fonts/itim";

export default function App() {
  let [chewyLoaded] = useChewy({
    Chewy_400Regular,
  });

  let [itimLoaded] = useItim({
    Itim_400Regular,
  });

  if (!chewyLoaded || !itimLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
