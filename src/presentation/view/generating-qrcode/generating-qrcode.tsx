/**
 * IMPORTS
 */
import React from "react";
import { Text, View, ImageBackground } from "react-native";

import { useTheme } from "styled-components/native";
import { AirplaneInFlight } from "phosphor-react-native";
import Svg, { Line, Circle } from "react-native-svg";
import QrCode from "react-native-qrcode-svg";

// typings

// styles
import { styles } from "./styles";
import { FlightDetails } from "../../components/flight-details/flight-details";
import { Details } from "../../components/details/details";

const GeneratingQrcode = () => {
  const theme = useTheme();

  return (
    <>
      <View style={styles.container}>
        {/**HEADER */}
        <ImageBackground
          style={styles.header}
          source={require("../../../app/assets/images/cover.png")}
        >
          <Text style={styles.title}>Cartão de embarque</Text>

          <Text style={styles.subTitle}>Falta 45 dias para sua viagem</Text>
        </ImageBackground>

        {/**TICKED */}
        <View style={styles.ticket}>
          {/**CONTENT */}
          <View style={styles.content}>
            {/**FLIGHT */}
            <View style={styles.flight}>
              {/**DETAILS */}
              <FlightDetails label="São Paulo" value="GRU" />
              <View style={styles.duration}>
                <AirplaneInFlight size={24} color={theme.colors.black_800} />
                <Text style={styles.hours}>9 h 45 min</Text>
              </View>
              <FlightDetails label="Nova York" value="JFK" />
            </View>

            <Text style={styles.label}>Passageiro</Text>
            <Text style={styles.name}>Weverson Luan</Text>

            {/**DETAILS */}
            <View style={styles.details}>
              <View style={styles.inline}>
                <Details label="Data" value="17 de Nov." />
                <Details label="Embarque" value="17:30" />
              </View>
            </View>
          </View>

          {/**ROW-CUSTUMON-DASH */}
          <View>
            <Svg height={20} width={"100%"}>
              <Line
                x1={"0% "}
                y1={"50%"}
                x2={"100%"}
                y2={"50%"}
                stroke={theme.colors.gray_300}
                strokeWidth={1}
                strokeDasharray={"5,5"}
              />

              <Circle r={8} cx={"0%"} cy={"50%"} fill={theme.colors.black} />
              <Circle r={8} cx={"100%"} cy={"50%"} fill={theme.colors.black} />
            </Svg>
          </View>

          {/**FOOTER */}
          <View style={styles.footer}>
            {/**FOOTER-CONTET*/}
            <View style={styles.footerContent}>
              <View style={styles.inline}>
                <Details label="Voo" value="YZ 607." />
                <Details label="Assento" value="29G." />
              </View>

              <View style={styles.inline}>
                <Details label="Terminal" value="3." />
                <Details label="Portão" value="39." />
              </View>
            </View>

            {/**QrCode*/}
            <QrCode value="boarding code" size={130} />
          </View>
        </View>
      </View>
    </>
  );
};

/**
 * EXPORT
 */
export { GeneratingQrcode };
