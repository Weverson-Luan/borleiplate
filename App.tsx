/**
 * Sample React Native App 0.74.1
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "./src/app/styles/styled-components/theme";

import { I18nextProvider } from "react-i18next";
import i18next from "./src/app/config/i18n/index.config";

import { AppRoutes } from "./src/presentation/routes";

import { GeneratingQrcode } from "./src/presentation/view/generating-qrcode/generating-qrcode";

export const App: React.FunctionComponent = () => {
  const data = [500, 450, 700, 310, 270, 510, 340, 400];
  const total = data
    .reduce((a, b) => a + b, 0)
    .toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency",
    });
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <GeneratingQrcode />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
