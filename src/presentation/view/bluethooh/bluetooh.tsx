import React from "react";
import { useEffect, useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  Alert,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { BleManager, Device } from "react-native-ble-plx";
import DeviceInfo from "react-native-device-info";

const bleManager = new BleManager();

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

const App = () => {
  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);
  const [procurando, setProcurando] = useState(false);
  const [conectando, setConectando] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState<Device[] | any>([]);

  const scanForPeripherals = () => {
    setProcurando(true);
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log("primeir log", error);
      }
      if (device && device.name) {
        setAllDevices((prevState: Device[]) => {
          if (!isDuplicteDevice(prevState, device)) {
            setProcurando(false);
            return [...prevState, device];
          }
          setProcurando(false);
          return prevState;
        });
      }
      setProcurando(false);
      return;
    });
  };

  const connectToDevice = async (deviceId: string) => {
    setConectando(true);
    try {
      const permissionsGranted = await requestPermissions();
      if (!permissionsGranted) {
        Alert.alert("Permissions not granted");
        return;
      }

      const device = await bleManager.connectToDevice(deviceId);
      await device.discoverAllServicesAndCharacteristics();
      console.log("Connected to device:", device.name);
      if (device && device.name) {
        setConnectedDevice((prevState: Device[]) => {
          if (!isDuplicteDevice(prevState, device)) {
            return [...prevState, device];
          }
          return prevState;
        });
      }
      // Agora você pode interagir com o dispositivo
      setConectando(false);
    } catch (error: any) {
      setConectando(false);
      console.error("Failed to connect:", error);
      Alert.alert("Failed to connect", error.message);
    }
  };

  const isDuplicteDevice = (devices: Device[], nextDevice: Device) =>
    devices.findIndex((device) => nextDevice.id === device.id) > -1;

  const disconnectFromDevice = () => {
    if (connectedDevice?.length) {
      bleManager.cancelDeviceConnection(connectedDevice.id);
      setConnectedDevice(null);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 24,
        paddingTop: 60,
        paddingBottom: 60,
        backgroundColor: "#FFF",
      }}
    >
      <TouchableOpacity
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
          marginBottom: 32,
        }}
        onPress={() => scanForPeripherals()}
      >
        {procurando ? (
          <ActivityIndicator size={24} color={"#fff"} />
        ) : (
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
            PROCURAR DISPO
          </Text>
        )}
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: "700",
          fontSize: 18,
          marginBottom: 16,
          color: "#000",
        }}
      >
        Dispositivos Encontrados
      </Text>

      <FlatList
        data={allDevices}
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
            onPress={() => setSelectedDeviceId(item.id)}
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

      {!!allDevices.length && (
        <>
          <TouchableOpacity
            style={{
              width: "100%",
              borderRadius: 4,
              height: 40,
              backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
            onPress={() => connectToDevice(selectedDeviceId!)}
          >
            {conectando ? (
              <ActivityIndicator size={24} color={"#ffffff"} />
            ) : (
              <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
                CONNECTAR AO: {selectedDeviceId}
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
            }}
            onPress={() => disconnectFromDevice()}
          >
            {false ? (
              <ActivityIndicator size={24} color={"#fff"} />
            ) : (
              <Text style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}>
                DESCONECTAR {connectedDevice[0]?.name}
              </Text>
            )}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default App;
