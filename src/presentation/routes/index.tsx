/**
 * IMPORTS
 */

// In App.js in a new project

import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AppRoutesStack from "./stacks/routes-stacks";

function AppRoutes() {
  return (
    <NavigationContainer>
      <AppRoutesStack />
    </NavigationContainer>
  );
}

export { AppRoutes };

/**
 * EXPORTS
 */
