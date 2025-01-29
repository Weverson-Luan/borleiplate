/**
 * IMPORTS
 */
import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";

<<<<<<< HEAD
// Gera uma lista mockada de 100 itens
const generateUsers = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: String(index + 1),
    name: `Usuário ${index + 1}`,
    email: `usuario${index + 1}@email.com`,
    avatar: `https://randomuser.me/api/portraits/men/${(index % 99) + 1}.jpg`,
  }));
};
=======
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
>>>>>>> eaca6c0b204290122e1c4a02d21ce69e7e2d5ade

const Home = () => {
  // Memoiza a lista para evitar re-renderizações desnecessárias
  const users = useMemo(() => generateUsers(), []);

<<<<<<< HEAD
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Usuários</Text>

      <FlatList
        testID="list-user"
        data={users}
        keyExtractor={(item) => item.id}
        initialNumToRender={10} // Renderiza 10 itens inicialmente
        maxToRenderPerBatch={10} // Número máximo de itens renderizados por batch
        windowSize={5} // Define o tamanho da janela virtualizada
        getItemLayout={(data, index) => ({
          length: 80, // Altura estimada do item (ajuste conforme necessário)
          offset: 80 * index,
          index,
        })}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} testID={`user-item-${item.id}`}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
=======
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
>>>>>>> eaca6c0b204290122e1c4a02d21ce69e7e2d5ade
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

/**
 * ESTILOS OTIMIZADOS
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height: 80,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
});
