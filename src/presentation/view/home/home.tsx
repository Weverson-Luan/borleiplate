/**
 * IMPORTS
 */
import React from "react";
import { useTheme } from "styled-components/native";

// typings

// typings

// styles
import { Text, View } from "react-native";

const Home = () => {
  const theme = useTheme();

  return (
    <>
      <View>
        <Text style={{ fontSize: 34, fontWeight: "700", color: "green" }}>
          Olá, Bem vinaod a Figuereido!
        </Text>
      </View>
    </>
  );
};

/**
 * EXPORT
 */
export { Home };
