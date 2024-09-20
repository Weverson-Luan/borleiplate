/**
 * IMPORTS
 */
import React from "react";
import { View } from "react-native";

// components
import { GraphicsWithD3 } from "../../components/graphics-with-d3/graphics-with-d3";

// styles
import { styles } from "./styles";

const Graphic = () => {
  const data = [500, 450, 700, 310, 270, 510, 340, 400];
  const total = data
    .reduce((a, b) => a + b, 0)
    .toLocaleString("pt-BR", {
      currency: "BRL",
      style: "currency",
    });

  return (
    <>
      <View style={styles.container}>
        <GraphicsWithD3
          data={data}
          color="#c5f04d"
          title={total}
          subTitle="Acumulado de Janeiro á Agosta de 2024"
        />
      </View>
    </>
  );
};

/**
 * EXPORT
 */
export { Graphic };
