import React, { useEffect, useState } from "react";
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

const BluetoothClassicScanner = () => {
  const [devices, setDevices] = useState<BluetoothDevice[]>([]);
  const [connectedDevice, setConnectedDevice] =
    useState<BluetoothDevice | null>(null);

  const requestPermissions = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_ADMIN,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        ]);

        const allGranted = Object.values(granted).every(
          (permission) => permission === PermissionsAndroid.RESULTS.GRANTED
        );

        if (!allGranted) {
          Alert.alert(
            "Permission denied",
            "You need to grant all permissions to use Bluetooth"
          );
          return false;
        }
        return true;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const listPairedDevices = async () => {
    try {
      const pairedDevices = await BluetoothSerial.getBondedDevices();
      setDevices([]);
    } catch (error) {
      console.error("Failed to list paired devices:", error);
    }
  };

  const discoverDevices = async () => {
    try {
      const unpairedDevices = await BluetoothSerial.startDiscovery();
      setDevices((prevDevices) => [...prevDevices, ...unpairedDevices]);
    } catch (error) {
      console.error("Failed to discover devices:", error);
    }
  };

  const connectToDevice = async (device: any) => {
    try {
      console.log("name", device?.name);
      const connected = await BluetoothSerial.connectToDevice(device.id);
      if (connected) {
        setConnectedDevice(device);
      }
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };

  const getConnectedDevices = async () => {
    try {
      const connectedDevices = await BluetoothSerial.getConnectedDevices();
      if (connectedDevices.length > 0) {
        setConnectedDevice(connectedDevices[0]);
        Alert.alert(
          "Connected",
          `Already connected to ${
            connectedDevices[0].name || connectedDevices[0].id
          }`
        );
      }
    } catch (error) {
      console.error("Failed to get connected devices:", error);
    }
  };

  // useEffect(() => {
  //   BluetoothSerial.requestBluetoothEnabled().then((enabled) => {
  //     if (enabled) {
  //       listPairedDevices();
  //     }
  //   });
  // }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1, padding: 24 }}>
      <TouchableOpacity
        style={{
          width: "100%",
          borderRadius: 4,
          height: 40,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 90,
          marginBottom: 32,
        }}
        onPress={discoverDevices}
      >
        {false ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
            PROCURAR NOVOS DISPO
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "100%",
          borderRadius: 4,
          height: 40,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",

          marginBottom: 32,
        }}
        onPress={getConnectedDevices}
      >
        {false ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
            VALIDAR DISPOSITIVOS
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
      {connectedDevice && <Text>Connected to: {connectedDevice?.name}</Text>}
    </View>
  );
};

export default BluetoothClassicScanner;
