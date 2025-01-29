import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  TextInput,
<<<<<<< HEAD
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView
=======
  Image,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
>>>>>>> eaca6c0b204290122e1c4a02d21ce69e7e2d5ade
} from "react-native";

// styles
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
<<<<<<< HEAD
  const { navigate } = useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);

  const handleLogin = useCallback(() => {
    const emailDefault = "admin@example.com";
    const passwordDefault = "123456";

    if (email !== emailDefault || password !== passwordDefault) {
      setIsError(true);
      return
    } else {
      setIsError(false);
      //@ts-ignore
      navigate("Home");
    }

  }, [email, password])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "#fff"
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        testID="scrollView"
      >
        {/* Logo */}
        <Image
          source={{ uri: "https://img.freepik.com/vetores-premium/icone-da-letra-s-em-forma-de-circulo-brilhante-azul-e-preto-em-um-fundo-branco_95164-10697.jpg?semt=ais_hybrid" }}
          style={styles.logo}
        />

        {/* Título */}
        <Text style={styles.title}>Faça seu login</Text>

        {/* Campo de Usuário */}
        <TextInput
          testID="email-input"
          style={styles.input}
          placeholder="Informe seu e-mail"
          placeholderTextColor={"gray"}
          value={email}
          onChangeText={setEmail}
          accessible={true}
          accessibilityLabel="Campo de e-mail"
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
          accessible={true}
          accessibilityLabel="Campo de senha"
        />

        {/* Botão de Login */}
        <TouchableOpacity
          testID="button"
          style={styles.button}
          onPress={handleLogin}
          accessible={true}
          accessibilityLabel="Botão de login"
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        {isError && (
          <View
            style={{
              width: "100%",
              padding: 8,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "red",
              borderRadius: 8
            }}
          >

            <Text style={{ color: "#fff", fontSize: 16 }}>Usuário ou senha inválidos!</Text>
          </View>
        )}
      </ScrollView>
=======
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
>>>>>>> eaca6c0b204290122e1c4a02d21ce69e7e2d5ade
    </KeyboardAvoidingView>
  );
};

/**
 * EXPORT
 */
export { Login };
