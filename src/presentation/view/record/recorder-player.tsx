import React, { useState, useRef } from "react";
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import AudioRecorderPlayer, {
  RecordBackType,
} from "react-native-audio-recorder-player";
import Button from "../../components/form/button/button";
import { Label } from "./styles";

const AudioRecorder = () => {
  const audioRecorderPlayer = useRef(new AudioRecorderPlayer()).current;
  const [isRecording, setIsRecording] = useState(false);
  const [recordedUri, setRecordedUri] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [escustar, setEscustar] = useState<any>("00:00:00");

  const onStartRecord = async () => {
    const atLeastAndroid13 =
      Platform.OS === "android" && Platform.Version >= 33;

    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);

        if (
          atLeastAndroid13
            ? granted["android.permission.RECORD_AUDIO"] ===
              PermissionsAndroid.RESULTS.GRANTED
            : granted["android.permission.WRITE_EXTERNAL_STORAGE"] ===
                PermissionsAndroid.RESULTS.GRANTED &&
              granted["android.permission.READ_EXTERNAL_STORAGE"] ===
                PermissionsAndroid.RESULTS.GRANTED &&
              granted["android.permission.RECORD_AUDIO"] ===
                PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log("Permissions granted");
        } else {
          console.log("All required permissions not granted");
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    const result = await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener((e) => {
      setEscustar({
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
      console.log("GRAVANDO: ", e);
      setIsRecording(true);
      console.log(result);
    });
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setRecordedUri(result);
    setIsRecording(false);
    console.log("Parar", result);
  };

  /**
   * Escutar um audio
   */
  const onStartPlay = async () => {
    const result = await audioRecorderPlayer.startPlayer(recordedUri);
    // const volume = await audioRecorderPlayer.setVolume(1.0);

    audioRecorderPlayer.addPlayBackListener(async (e) => {
      if (e.currentPosition === e.duration) {
        onStopPlay();
      }
      console.log("Playing: ", e.currentPosition);
    });

    setIsRecording(true);
    console.log("Playing started: ", result);
  };

  /**
   * Parar a reprodução de audio
   */
  const onStopPlay = async () => {
    const result = await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    setIsRecording(false);
    console.log("PARA GRAVAÇÃO: ", result);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.titleTxt}>Escutar Audio</Text> */}
      <Label>Escutar Audio</Label>
      <Text style={styles.txtRecordCounter}>
        {escustar?.recordTime !== null ? escustar?.recordTime : "00:00:00"}
      </Text>

      <View style={styles.viewRecorder}>
        <View style={styles.recordBtnWrapper}>
          <Button
            style={styles.btn}
            onPress={onStartPlay}
            textStyle={styles.txt}
          >
            Escutar
          </Button>
          <Button
            style={[
              styles.btn,
              {
                marginLeft: 12,
              },
            ]}
            onPress={onStartPlay}
            textStyle={styles.txt}
          >
            Pause
          </Button>

          <Button
            style={[styles.btn, { marginLeft: 12 }]}
            onPress={() => {}}
            textStyle={styles.txt}
          >
            Stop
          </Button>
        </View>
      </View>

      <View style={styles.viewPlayer}>
        <TouchableOpacity style={styles.viewBarWrapper}>
          <View style={styles.viewBar}>
            <View style={[styles.viewBarPlay, { width: 10 }]} />
          </View>
        </TouchableOpacity>
        <Text style={styles.titleTxt}>Gravar Audio</Text>
        <Text style={styles.txtCounter}>
          {" "}
          {escustar?.recordTime !== null ? escustar?.recordTime : "00:00:00"}
        </Text>
        <View style={styles.playBtnWrapper}>
          <Button
            style={styles.btn}
            onPress={onStartRecord}
            textStyle={styles.txt}
          >
            Play
          </Button>
          <Button
            style={[
              styles.btn,
              {
                marginLeft: 12,
              },
            ]}
            onPress={() => {}}
            textStyle={styles.txt}
          >
            Pausar gravação
          </Button>

          <Button
            style={[
              styles.btn,
              {
                marginLeft: 12,
              },
            ]}
            onPress={onStopRecord}
            textStyle={styles.txt}
          >
            Parar gravação
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#455A64",
    flexDirection: "column",
    alignItems: "center",
  },
  titleTxt: {
    marginTop: 100,
    color: "white",
    fontSize: 28,
  },
  viewRecorder: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  recordBtnWrapper: {
    flexDirection: "row",
  },
  viewPlayer: {
    marginTop: 60,
    alignSelf: "stretch",
    alignItems: "center",
  },
  viewBarWrapper: {
    marginTop: 28,
    marginHorizontal: 28,
    alignSelf: "stretch",
  },
  viewBar: {
    backgroundColor: "#ccc",
    height: 4,
    alignSelf: "stretch",
  },
  viewBarPlay: {
    backgroundColor: "white",
    height: 4,
    width: 0,
  },
  playStatusTxt: {
    marginTop: 8,
    color: "#ccc",
  },
  playBtnWrapper: {
    flexDirection: "row",
    marginTop: 40,
  },
  btn: {
    borderColor: "white",
    borderWidth: 1,
  },
  txt: {
    color: "white",
    fontSize: 14,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  txtRecordCounter: {
    marginTop: 32,
    color: "white",
    fontSize: 20,
    textAlignVertical: "center",
    fontWeight: "200",
    fontFamily: "Helvetica Neue",
    letterSpacing: 3,
  },
  txtCounter: {
    marginTop: 12,
    color: "white",
    fontSize: 20,
    textAlignVertical: "center",
    fontWeight: "200",
    fontFamily: "Helvetica Neue",
    letterSpacing: 3,
  },
});
export default AudioRecorder;
