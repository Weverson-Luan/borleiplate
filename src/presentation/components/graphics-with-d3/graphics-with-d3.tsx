/**
 * IMPORTS
 */

import React, { useState } from "react";
import { Text, View } from "react-native";

import { Svg, Path, LinearGradient, Defs, Stop } from "react-native-svg";
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

const GraphicsWithD3 = ({ data, color, subTitle, title }: ILineChartProps) => {
  const [widthScren, setWidthScren] = useState(0);
  const heightScren = widthScren * CHART_ASPECT_RATIO;
  const chartHeight = (heightScren * 2) / 4;

  // recuperar valor minino e maximo
  const min = Math.min(...data);
  const max = Math.max(...data);

  // criar a escala em Y na vertical (Linear Scale)
  const yScale = D3.scaleLinear().domain([min, max]).range([chartHeight, 0]);

  // criar a escala em X na horizontal (Linear Scale)
  const xScale = D3.scaleLinear()
    .domain([0, data.length - 1])
    .range([0, widthScren]);

  // criar a linha com d3
  const lineFn = D3.line<number>()
    .y((d, index) => yScale(d))
    .x((d, index) => xScale(index))
    .curve(D3.curveCardinal.tension(0.3));

  const areaFn = D3.area<number>()
    .x((d, index) => xScale(index))
    .y0(heightScren)
    .y1((d, index) => yScale(d))
    .curve(D3.curveCardinal.tension(0.3));

  // conevrter para svg
  const svgLine = lineFn(data) ?? "";

  const svgArea = areaFn(data) ?? "";

  return (
    <View
      style={styles.container}
      onLayout={({
        nativeEvent: {
          layout: { width },
        },
      }) => setWidthScren(width)}
    >
      <Svg
        width={widthScren}
        height={heightScren}
        viewBox={`0 0 ${widthScren} ${heightScren - 12}`}
      >
        <Defs>
          <LinearGradient
            id="gradient"
            x1={"0%"}
            y1={"0%"}
            x2={"0%"}
            y2={"100%"}
          >
            <Stop offset="0%" stopColor={color} stopOpacity={0.7} />
            <Stop offset="100%" stopColor={color} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Path d={svgLine} fill="none" stroke={color} strokeWidth={4} />
        <Path
          d={svgArea}
          fill={`url(#gradient)`}
          stroke={"none"}
          strokeWidth={4}
        />
      </Svg>

      <View style={styles.footer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

/**
 * EXPORTS
 */
export { GraphicsWithD3 };
