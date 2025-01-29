import React, { useCallback, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

// styles
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);

  const handleLogin = useCallback(() => {
    const emailDefault = "admin@example.com";
    const passwordDefault = "123456";

    if (email !== emailDefault || password !== passwordDefault) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
      //@ts-ignore
      navigate("Home");
    }
  }, [email, password]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        testID="scrollView"
      >
        {/* Logo */}
        <Image
          source={{
            uri: "https://img.freepik.com/vetores-premium/icone-da-letra-s-em-forma-de-circulo-brilhante-azul-e-preto-em-um-fundo-branco_95164-10697.jpg?semt=ais_hybrid",
          }}
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
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>
              Usuário ou senha inválidos!
            </Text>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

/**
 * EXPORT
 */
export { Login };
