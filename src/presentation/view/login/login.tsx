import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

// styles
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { navigate } = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(() => {
    if (username === "" || password === "") {
      Alert.alert("Alerta", "Preencha todos os campos!");
      return;
    }

    //@ts-ignore
    navigate("Home");
  }, [username, password]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
          }}
        >
          {/* Logo */}
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMeeZRI88W5uEJORPP2DpTZTXs0ejSVj6bZg&s",
            }}
            style={styles.logo}
          />

          {/* Título */}
          <Text style={{ fontSize: 34, color: "blue", marginBottom: 20 }}>
            Faça seu login
          </Text>

          {/* Campo de Usuário */}
          <TextInput
            testID="email-input"
            style={styles.input}
            placeholder="Informe seu E-mail"
            placeholderTextColor={"gray"}
            value={username}
            onChangeText={setUsername}
            blurOnSubmit={false} // Impede o teclado de fechar
          />

          {/* Campo de Senha */}
          <TextInput
            testID="password-input"
            style={styles.input}
            placeholder="Informe sua Senha"
            placeholderTextColor={"gray"}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Botão de Login */}
          <TouchableOpacity
            testID="button-login"
            style={{
              width: "100%",
              height: 45,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: "blue",
              marginTop: 20,
            }}
            onPress={handleLogin}
            accessible={true}
            accessibilityLabel="Login Button"
          >
            <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "500" }}>
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

/**
 * EXPORT
 */
export { Login };
