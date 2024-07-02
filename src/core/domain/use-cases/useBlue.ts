/* eslint-disable no-bitwise */
import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";

import DeviceInfo from "react-native-device-info";

// Supondo que você tenha uma função requestAndroid31Permissions definida em algum lugar

interface BluetoothLowEnergyApi {
  requestPermissions(): Promise<boolean>;
  connectToDevice: (deviceId: string) => Promise<void>;
  disconnectFromDevice: () => void;
  connectedDevice: Device | null;
  allDevices: Device[];
  isLoading: boolean;
  scanForDevices: (setDevices: any) => Promise<void>;
}

function useBLE(): BluetoothLowEnergyApi {
  const bleManager = useMemo(() => new BleManager(), []);
  const [allDevices, setAllDevices] = useState<Device[]>([]);
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        const isAndroid31PermissionsGranted =
          await requestAndroid31Permissions();
        return isAndroid31PermissionsGranted;
      }
    } else {
      return true;
    }
  };

  const connectToDevice = async (deviceId: string) => {
    try {
      const permissionsGranted = await requestPermissions();
      if (!permissionsGranted) {
        console.log("Permissions not granted");
        return;
      }

      const device = await bleManager.connectToDevice(deviceId);
      await device.discoverAllServicesAndCharacteristics();
      console.log("Connected to device:", device.id);
      // Agora você pode interagir com o dispositivo
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };

  const disconnectFromDevice = () => {
    if (connectedDevice) {
      bleManager.cancelDeviceConnection(connectedDevice.id);
      setConnectedDevice(null);
    }
  };

  const scanForDevices = async (setDevices: any) => {
    const permissionsGranted = await requestPermissions();
    if (!permissionsGranted) {
      console.log("Permissions not granted");
      return;
    }

    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error("Device scan error:", error);
        return;
      }

      if (device) {
        console.log("Found device:", device.id, device.name);
        setDevices((prevDevices: any) => {
          const deviceExists = prevDevices.some((d: any) => d.id === device.id);
          if (!deviceExists) {
            return [...prevDevices, device];
          }
          return prevDevices;
        });
      }
    });

    // Pare o scan após 10 segundos
    setTimeout(() => {
      bleManager.stopDeviceScan();
    }, 10000);
  };

  return {
    requestPermissions,
    connectToDevice,
    allDevices,
    connectedDevice,
    disconnectFromDevice,
    isLoading,
    scanForDevices,
  };
}

export default useBLE;
