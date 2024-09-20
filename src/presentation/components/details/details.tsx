/**
 * IMPORTS
 */
import React from "react";
import { useTheme } from "styled-components/native";

// typings

// typings

// styles
import { Text, View } from "react-native";
import { styles } from "./styles";

type IFlightProps = {
  label: string;
  value: string;
};

const Details = ({ label, value }: IFlightProps) => {
  const theme = useTheme();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </>
  );
};

/**
 * EXPORT
 */
export { Details };
