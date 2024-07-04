/**
 * Sample React Native App 0.74.1
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "./src/core/styles/styled-components/theme";

import { I18nextProvider } from "react-i18next";
import i18next from "./src/core/config/i18n/index.config";

import { AppRoutes } from "./src/presentation/routes";

export const App: React.FunctionComponent = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
