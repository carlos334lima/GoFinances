import React from "react";
import { StatusBar } from "react-native";

//@libraries
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./src/hooks";
import { Routes } from "./src/routes";

//@utils
//import AppProvider from './src/hooks';
import { Dashboard } from "./src/screens/Dashboard";
import { Register } from "./src/screens/Register";
import { SignIn } from "./src/screens/SignIn";

//@styles
import theme from "./src/styles/theme";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
      <StatusBar barStyle="light-content" />
      <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
