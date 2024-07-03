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
import Bluetooh from "./src/presentation/view/bluethooh/bluetooh";
import BluetoothClassicScanner from "./src/presentation/view/blueethoh-classic/blueethoh-classic";

export const App: React.FunctionComponent = () => {
  const deviceId = "6C:97:6D:C7:F0:DF";
  return (
    <ThemeProvider theme={theme}>
      <BluetoothClassicScanner />
    </ThemeProvider>
  );
};

export default App;
