/**
 * IMPORTS
 */
import React from "react";

import "../../../app/styles/unistyles";

import { View, Text, Pressable } from "react-native";

import { useStyles, UnistylesRuntime } from "react-native-unistyles";

import { stylesheetMoreUnistyles } from "./unistyles";

export const DarkMode: React.FunctionComponent = () => {
  const { styles } = useStyles(stylesheetMoreUnistyles);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: "100%" }}>
          <Text style={styles.text}>
            Óla,
            <Text style={styles.highlight}>{` Dev`}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.playground}>
        <Text style={styles.note}>
          <Text style={styles.bold}>{`${UnistylesRuntime.themeName} `}</Text>O
          tema Quando combinados com outros modos de cor, permitem uma
          personalização da plataforma, sendo uma boa feature de produto.Uma
          pessoa pode optar por usar o modo claro durante o dia e o modo escuro
          à noite, para descansar os olhos.
        </Text>
      </View>

      <Pressable
        style={styles.cta}
        onPress={() =>
          UnistylesRuntime.setTheme(
            UnistylesRuntime.themeName === "light" ? "dark" : "light"
          )
        }
      >
        <Text>Mudar de tema</Text>
      </Pressable>
    </View>
  );
};

export default DarkMode;
