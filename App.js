import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useChewy,
  Chewy_400Regular,
} from "@expo-google-fonts/chewy";
import { useFonts as useItim, Itim_400Regular } from "@expo-google-fonts/itim";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import 'react-native-gesture-handler';
import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";


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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <AppNavigator/>
          </RestaurantsContextProvider>
        </LocationContextProvider>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
