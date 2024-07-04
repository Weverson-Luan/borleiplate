// In App.js in a new project

import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BluetoothClassicScanner from "../../view/blueethoh-classic/blueethoh-classic";
import { Home } from "../../view/home/home";
import BluettohBlePlx from "../../view/verify-bluetooh/step-one/bluethooh-ble-plx/bluetooh";

const Stack = createNativeStackNavigator();

function AppRoutesStack() {
  return (
    <Stack.Navigator initialRouteName="Blueetoh">
      <Stack.Screen
        name="Blueetoh"
        options={{ title: "Conectar Bluetooh" }}
        component={BluetoothClassicScanner}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default AppRoutesStack;
