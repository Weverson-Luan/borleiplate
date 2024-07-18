import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  PermissionsAndroid,
  Platform,
  Alert,
} from "react-native";
import BluetoothSerial, {
  BluetoothDevice,
} from "react-native-bluetooth-classic";
import DeviceInfo from "react-native-device-info";
import { useNavigation } from "@react-navigation/native";

const requestAndroid31Permissions = async () => {
  const bluetoothScanPermission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
    {
      title: "Location Permission",
      message: "Bluetooth Low Energy requires Location",
      buttonPositive: "OK",
    }
  );
  const bluetoothConnectPermission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
    {
      title: "Location Permission",
      message: "Bluetooth Low Energy requires Location",
      buttonPositive: "OK",
    }
  );
  const fineLocationPermission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: "Location Permission",
      message: "Bluetooth Low Energy requires Location",
      buttonPositive: "OK",
    }
  );

  return (
    bluetoothScanPermission === "granted" &&
    bluetoothConnectPermission === "granted" &&
    fineLocationPermission === "granted"
  );
};

const requestPermissions = async () => {
  if (Platform.OS === "android") {
    const apiLevel = await DeviceInfo.getApiLevel();
    if ((apiLevel ?? -1) < 31) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "Bluetooth Low Energy requires Location",
          buttonPositive: "OK",
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const isAndroid31PermissionsGranted = await requestAndroid31Permissions();

      return isAndroid31PermissionsGranted;
    }
  } else {
    return true;
  }
};

/**
 * Focada em dispositivos Bluetooth Clássico (não BLE), permitindo comunicação com dispositivos como impressoras e fones de ouvido.
 * Suporta conexão, leitura, escrita e escaneamento de dispositivos Bluetooth Clássico.
 *  @returns https://github.com/kenjdavidson/react-native-bluetooth-classic
 */
const BluetoothClassicScanner = () => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);
  const [connectedDevice, setConnectedDevice] =
    useState<BluetoothDevice | null>(null);

  const [procurando, setProcurando] = useState(false);
  const [validandoDipositivo, setValidandoDipositivo] = useState(false);

  const handleValidarDipositivoConectado = async () => {
    try {
      console.log("selecionou", connectedDevice?.name);

      setValidandoDipositivo(true);
      if (connectedDevice?.id) {
        const pairedDevices = await BluetoothSerial.pairDevice(
          connectedDevice?.address
        );
        console.log("Bluetooth CONECTADO", pairedDevices);
        return;
      }

      Alert.alert(
        "Selecione dispositivo",
        `Procure dipositivos para se connectar`
      );
    } catch (error) {
      setValidandoDipositivo(false);
      console.error("Failed to list paired devices:", error);
    } finally {
      setValidandoDipositivo(false);
    }
  };

  const discoverDevices = async () => {
    try {
      setProcurando(true);
      const permission = await requestPermissions();
      if (permission) {
        const unpairedDevices = await BluetoothSerial.startDiscovery();

        // Adiciona novos dispositivos à lista, evitando duplicados
        setDevices((prevDevices) => {
          const newDevices = unpairedDevices.filter(
            (device) =>
              !prevDevices.some((prevDevice) => prevDevice.id === device.id)
          );
          return [...prevDevices, ...newDevices];
        });
      }
      setProcurando(false);
    } catch (error) {
      console.error("Failed to discover devices:", error);
    }
  };

  const connectToDevice = async (device: BluetoothDevice) => {
    try {
      setIsLoading(true);
      console.log(device.id);
      const deviceConnection = await BluetoothSerial.pairDevice(device.address);
      if (deviceConnection.bonded) {
        setConnectedDevice(deviceConnection);
      } else {
        setConnectedDevice(null);
      }
      BluetoothSerial.cancelDiscovery();
      setIsLoading(false);
    } catch (e) {
      console.log("FAILED TO CONNECT", e);
    }
  };

  const buscarAparelhoMotorista = async () => {
    // const truckAsync = await AsyncStorage.getItem("@trucks");
    // const truck = truckAsync !== null ? JSON.parse(truckAsync!) : null;
    // if (!truck) {
    //   const data = {
    //     name: "Volvo Truck",
    //     id: "6C:97:6D:C7:F0:DF",
    //     address: "6C:97:6D:C7:F0:DF",
    //   };
    //   await AsyncStorage.setItem("@trucks", JSON.stringify(data));
    //   return;
    // }
  };

  useEffect(() => {
    buscarAparelhoMotorista();
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        padding: 24,
        paddingBottom: 64,
      }}
    >
      {/**PROCURAR DIPOSITIVO */}
      <TouchableOpacity
        style={{
          width: "100%",
          borderRadius: 20,
          height: 40,
          backgroundColor: "#051C3B",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
        }}
        onPress={discoverDevices}
      >
        {procurando ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
            PROCURAR NOVOS DISPOSITIVOS
          </Text>
        )}
      </TouchableOpacity>

      {/**LIMPAR TODOS DISPOSITIVOS */}
      {/* <TouchableOpacity
        style={{
          width: "100%",
          borderRadius: 20,
          height: 40,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",

          marginBottom: 16,
        }}
        onPress={() => setDevices([])}
      >
        {false ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
            LIMPAR DISPOSITIVOS
          </Text>
        )}
      </TouchableOpacity> */}

      {/**VALIDAR DIPOSITIVO CONECTADO */}
      {/* <TouchableOpacity
        style={{
          width: "100%",
          borderRadius: 20,
          height: 40,
          backgroundColor: "#FC5701",
          alignItems: "center",
          justifyContent: "center",

          marginBottom: 32,
        }}
        onPress={handleValidarDipositivoConectado}
      >
        {validandoDipositivo ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
            VALIDAR DISPOSITIVOS CONECTADO
          </Text>
        )}
      </TouchableOpacity> */}

      {connectedDevice?.name ? (
        <TouchableOpacity
          style={{
            width: "100%",
            height: 60,
            backgroundColor: "gray",
            marginBottom: 8,
            paddingTop: 8,
            paddingLeft: 16,
            borderRadius: 4,
          }}
          key={connectedDevice.id}
          onPress={() => {}}
        >
          <Text
            style={{
              marginBottom: 4,
              color: "#fff",
              fontWeight: "700",
              fontSize: 16,
            }}
          >
            DISPOSITIVO: {connectedDevice.name ?? "Sem nome"}
          </Text>
          <Text>ID : {connectedDevice.id}</Text>
        </TouchableOpacity>
      ) : (
        <FlatList
          data={devices}
          keyExtractor={(item: any) => item?.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: "100%",
                height: 60,
                backgroundColor: "gray",
                marginBottom: 8,
                paddingTop: 8,
                paddingLeft: 16,
                borderRadius: 4,
              }}
              key={item.id}
              onPress={() => connectToDevice(item)}
            >
              <Text
                style={{
                  marginBottom: 4,
                  color: "#fff",
                  fontWeight: "700",
                  fontSize: 16,
                }}
              >
                DISPOSITIVO: {item.name ?? "Sem nome"}
              </Text>
              <Text>ID : {item.id}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              NENHUM DISPOSITIVO ENCONTRADO...
            </Text>
          }
        />
      )}
    </View>
  );
};

export default BluetoothClassicScanner;
