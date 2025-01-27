import React, { useState } from "react";
import { Text, View, TextInput, Button, Image } from "react-native";

// styles
import { styles } from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para fazer o login
    console.log("Usuário:", username);
    console.log("Senha:", password);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={{ uri: "https://link-da-sua-logo.com/logo.png" }} // Substitua pela URL da sua logo
        style={styles.logo}
      />

      {/* Título */}
      <Text style={{ fontSize: 34, color: "blue", marginBottom: 20 }}>
        Faça seu login
      </Text>

      {/* Campo de Usuário */}
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor={"gray"}
        value={username}
        onChangeText={setUsername}
      />

      {/* Campo de Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={"gray"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botão de Login */}
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

/**
 * EXPORT
 */
export { Login };
