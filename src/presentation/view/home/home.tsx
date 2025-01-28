/**
 * IMPORTS
 */
import React from "react";
import { useTheme } from "styled-components/native";

// styles
import { FlatList, Text, View, Image, StyleSheet } from "react-native";

const data = [
  {
    id: "1",
    name: "Fulano",
    email: "fulano@example.com",
    phone: "123456789",
    image:
      "https://img.freepik.com/vetores-gratis/letra-colorida-um-design-de-logotipo-gradiente_474888-2309.jpg", // Substitua por URLs válidas
  },
  {
    id: "2",
    name: "Ciclano",
    email: "ciclano@example.com",
    phone: "987654321",
    image:
      "https://img.freepik.com/vetores-gratis/letra-colorida-um-design-de-logotipo-gradiente_474888-2309.jpg", // Substitua por URLs válidas
  },
  {
    id: "3",
    name: "João Sousa",
    email: "joaosousa@example.com",
    phone: "254454563",
    image:
      "https://img.freepik.com/vetores-gratis/letra-colorida-um-design-de-logotipo-gradiente_474888-2309.jpg", // Substitua por URLs válidas
  },
];

const Home = () => {
  const theme = useTheme();

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

/**
 * STYLES
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 70,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "green",
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "gray",
    marginBottom: 4,
  },
  phone: {
    fontSize: 14,
    color: "gray",
  },
});

/**
 * EXPORT
 */
export { Home };
