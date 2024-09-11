/**
 * IMPORTS
 */

import React, { useState } from "react";
import { View } from "react-native";

import { Svg, Path } from "react-native-svg";
import { D3 } from "../../../data/libs/d3";

// styles
import { styles } from "./styles";

type ILineChartProps = {
  data: number[];
  color: string;
  title: string;
  subTitle: string;
};

// VALOR QUE GUARDA O FORMATO DO GRAFICO
const CHART_ASPECT_RATIO = 9 / 5;

const GraphicsWithD3 = ({ data, color }: ILineChartProps) => {
  const [widthScren, setWidthScren] = useState(0);
  const heightScren = widthScren * CHART_ASPECT_RATIO;

  // recuperar valor minino e maximo
  const min = Math.min(...data);
  const max = Math.max(...data);

  // criar a escala em Y na vertical (Linear Scale)
  const yScale = D3.scaleLinear().domain([min, max]).range([heightScren, 0]);

  // criar a escala em X na horizontal (Linear Scale)
  const xScale = D3.scaleLinear()
    .domain([0, data.length - 1])
    .range([0, widthScren]);

  // criar a linha com d3
  const lineFn = D3.line<number>()
    .y((d, index) => yScale(d))
    .x((d, index) => xScale(index));

  // conevrter para svg
  const svgLine = lineFn(data) ?? "";
  console.log("*" + svgLine);

  return (
    <View
      style={styles.container}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => setWidthScren(width)}
    >
      <Svg width={widthScren} height={heightScren}>
        <Path d={svgLine} fill="none" stroke={color} strokeWidth={4} />
      </Svg>
    </View>
  );
};

/**
 * EXPORTS
 */
export { GraphicsWithD3 };
