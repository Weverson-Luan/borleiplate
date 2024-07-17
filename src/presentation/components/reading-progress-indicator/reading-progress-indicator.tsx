/**
 * IMPORTS
 */

import React, { useState, useRef } from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";

// styles
import { styles } from "./styles";
import { ProgressBar } from "../progress-bar/progress-bar";

/**
 *
 * 1 -> Precisa calcular qual a porcetagem que o usuário está lendo
 * 2 -> Precisa saber qual e o tamanho da lista
 * 3 -> Precisa descobrir qual porcetagem ja vai mostrar pro usuário de inicio
 * 4 -> Precisa saber qual parte de lista o usuário está
 *
 * onScroll => responsavel por observa qualquer evento de rolagem no flatList
 */

/**
 * Content size
 * É o tamanho do conteúdo da ScrollView.
 * height and width
 */

/**
 * Content offset
 * x and y
 * Onde o usuário fica ao terminar a rolagem.
 */

/**
 * Layout measurement
 * height and width
 * Medidas do layout visivel na tela.
 */

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};

const ReadingProgressIndicator = () => {
  const [percetage, setPercetage] = useState(0);

  const dimisions = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);

  const handleScrollPercentage = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: ScrollProps) => {
    const visibleContent = Math.ceil(
      (dimisions.height / contentSize.height) * 100
    );

    const value =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

    setPercetage(value < visibleContent ? 0 : Math.round(value));
  };

  const handleScrollMoveTop = () => {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={(event) => handleScrollPercentage(event.nativeEvent)}
      >
        <Text style={styles.title}>Lorem ipsum</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus illum eligendi debitis quidem. Eum dolores, fuga
          officia ullam cupiditate ipsum atque ad quisquam incidunt dolore?
          Aspernatur officia molestias nesciunt reiciendis.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus illum eligendi debitis quidem. Eum dolores, fuga
          officia ullam cupiditate ipsum atque ad quisquam incidunt dolore?
          Aspernatur officia molestias nesciunt reiciendis. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Necessitatibus illum eligendi
          debitis quidem. Eum dolores, fuga officia ullam cupiditate ipsum atque
          ad quisquam incidunt dolore? Aspernatur officia molestias nesciunt
          reiciendis.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus illum eligendi debitis quidem. Eum dolores, fuga
          officia ullam cupiditate ipsum atque ad quisquam incidunt dolore?
          Aspernatur officia molestias nesciunt reiciendis. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Necessitatibus illum eligendi
          debitis quidem. Eum dolores, fuga officia ullam cupiditate ipsum atque
          ad quisquam incidunt dolore? Aspernatur officia molestias nesciunt
          reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus illum eligendi debitis quidem. Eum dolores, fuga
          officia ullam cupiditate ipsum atque ad quisquam incidunt dolore?
          Aspernatur officia molestias nesciunt reiciendis. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Necessitatibus illum eligendi
          debitis quidem. Eum dolores, fuga officia ullam cupiditate ipsum atque
          ad quisquam incidunt dolore? Aspernatur officia molestias nesciunt
          reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus illum eligendi debitis quidem. Eum dolores, fuga
          officia ullam cupiditate ipsum atque ad quisquam incidunt dolore?
          Aspernatur officia molestias nesciunt reiciendis. Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Necessitatibus illum eligendi
          debitis quidem. Eum dolores, fuga officia ullam cupiditate ipsum atque
          ad quisquam incidunt dolore? Aspernatur officia molestias nesciunt
          reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus illum eligendi debitis quidem. Eum dolores, fuga
          officia ullam cupiditate ipsum atque ad quisquam incidunt dolore?
          Aspernatur officia molestias nesciunt reiciendis.
        </Text>
      </ScrollView>

      <ProgressBar value={percetage} onMoveTop={handleScrollMoveTop} />
    </View>
  );
};

/**
 * EXPORTS
 */
export { ReadingProgressIndicator };
