/**
 * Sample React Native App 0.74.1
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "./src/core/styles/styled-components/theme";

import AudioRecorder from "./src/presentation/view/record/recorder-player";

export const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <AudioRecorder />
    </ThemeProvider>
  );
};

export default App;
