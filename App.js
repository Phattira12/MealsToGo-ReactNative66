import React, { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useChewy,
  Chewy_400Regular,
} from "@expo-google-fonts/chewy";
import { useFonts as useItim, Itim_400Regular } from "@expo-google-fonts/itim";
import "react-native-gesture-handler";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

// service เชื่อมต่อภายนอก/databest
// context แชร์ข้อมูลจาก service มาใช้
// navigation กำหนดเส้นทาง
// screen แสดงผล

// useEffect(() => {
//   setTimeout(() => {
//     firebase.auth
//       .signInWithEmailAndPassword(
//         firebase.getAuth,
//         "film@gmail.com",
//         "film12"
//       )
//       .then((user) => {
//         setIsAuthenticated(true);
//       })
//       .catch(() => {
//         setIsAuthenticated(false);
//       });
//   }, 2000);
// }, []);
