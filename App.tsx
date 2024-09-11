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
import { GraphicsWithD3 } from "./src/presentation/components/graphics-with-d3/graphics-with-d3";

export const App: React.FunctionComponent = () => {
  const data = [500, 450, 700, 310, 270, 510, 340, 400];
  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <GraphicsWithD3
          data={data}
          color="#c5f04d"
          title="R$ 500,00"
          subTitle="Acumulado de Janeiro á Agosta de 2024"
        />
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
