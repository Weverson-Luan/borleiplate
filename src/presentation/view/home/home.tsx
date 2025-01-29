/**
 * IMPORTS
 */
import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, Text, View, Image, StyleSheet } from "react-native";

// Gera uma lista mockada de 100 itens
const generateUsers = () => {
  return Array.from({ length: 100 }, (_, index) => ({
    id: String(index + 1),
    name: `Usuário ${index + 1}`,
    email: `usuario${index + 1}@email.com`,
    avatar: `https://randomuser.me/api/portraits/men/${(index % 99) + 1}.jpg`,
  }));
};

const Home = () => {
  // Memoiza a lista para evitar re-renderizações desnecessárias
  const users = useMemo(() => generateUsers(), []);

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
      />
    </View>
  );
};

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
