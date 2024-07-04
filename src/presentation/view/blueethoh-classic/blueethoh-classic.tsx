import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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
      const grantedBluetoothScan = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        {
          title: "Bluetooth Scan Permission",
          message: "Bluetooth Low Energy requires Bluetooth Scan permission",
          buttonPositive: "OK",
        }
      );

      const grantedBluetoothConnect = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        {
          title: "Bluetooth Connect Permission",
          message: "Bluetooth Low Energy requires Bluetooth Connect permission",
          buttonPositive: "OK",
        }
      );

      const grantedAccessFineLocation = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message: "Bluetooth Low Energy requires Location",
          buttonPositive: "OK",
        }
      );

      return (
        grantedBluetoothScan === PermissionsAndroid.RESULTS.GRANTED &&
        grantedBluetoothConnect === PermissionsAndroid.RESULTS.GRANTED &&
        grantedAccessFineLocation === PermissionsAndroid.RESULTS.GRANTED
      );
    }
  } else {
    return true;
  }
};
const BluetoothClassicScanner = () => {
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);
  const [connectedDevice, setConnectedDevice] =
    useState<BluetoothDevice | null>(null);

  const [procurando, setProcurando] = useState(false);
  const [conectando, setConectando] = useState(false);
  const [validandoDipositivo, setValidandoDipositivo] = useState(false);

  const listPairedDevices = async () => {
    try {
      setValidandoDipositivo(true);
      const pairedDevices = await BluetoothSerial.unpairDevice(
        "78:37:16:5B:73:FA"
      );
      console.log("Bluetooth", pairedDevices);
      setValidandoDipositivo(false);
    } catch (error) {
      setValidandoDipositivo(false);
      console.error("Failed to list paired devices:", error);
    }
  };

  const discoverDevices = async () => {
    try {
      setProcurando(true);
      await requestPermissions();
      const unpairedDevices = await BluetoothSerial.startDiscovery();
      setDevices((prevDevices) => [...prevDevices, ...unpairedDevices]);
      setProcurando(false);
    } catch (error) {
      console.error("Failed to discover devices:", error);
    }
  };

  const connectToDevice = async (device: BluetoothDevice) => {
    try {
      console.log("name", device?.name, device.address);

      const connected = await BluetoothSerial.connectToDevice(device.id, {
        secureSocket: false,
        readTimeout: 100000,
      });
      if (connected) {
        setConnectedDevice(device);
      }
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };

  const getConnectedDevices = async () => {
    try {
      setValidandoDipositivo(true);
      const connectedDevices = await BluetoothSerial.getConnectedDevices();
      console.log("Connected devices", connectedDevices);
      if (connectedDevices.length > 0) {
        setConnectedDevice(connectedDevices[0]);
        Alert.alert(
          "Connected",
          `Already connected to ${
            connectedDevices[0].name || connectedDevices[0].id
          }`
        );
        setValidandoDipositivo(false);
      }
      setValidandoDipositivo(false);
    } catch (error) {
      setValidandoDipositivo(false);
      console.error("Failed to get connected devices:", error);
    }
  };

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
      <TouchableOpacity
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
      </TouchableOpacity>

      {/**VALIDAR DIPOSITIVO CONECTADO */}
      <TouchableOpacity
        style={{
          width: "100%",
          borderRadius: 20,
          height: 40,
          backgroundColor: "#FC5701",
          alignItems: "center",
          justifyContent: "center",

          marginBottom: 32,
        }}
        onPress={listPairedDevices}
      >
        {validandoDipositivo ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
            VALIDAR DISPOSITIVOS CONECTADO
          </Text>
        )}
      </TouchableOpacity>

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
    </View>
  );
};

export default BluetoothClassicScanner;