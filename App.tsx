import React from "react";
import { StatusBar } from "react-native";

//@libraries
import { ThemeProvider } from "styled-components";

//@utils
//import AppProvider from './src/hooks';
import { Dashboard } from "./src/screens/Dashboard";

//@styles
import theme from "./src/styles/theme";


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Dashboard />
    </ThemeProvider>
  );
}
