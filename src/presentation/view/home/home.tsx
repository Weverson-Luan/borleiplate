/**
 * IMPORTS
 */
import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList, Text, View, Image } from "react-native";
import { styles } from "./styles";

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
