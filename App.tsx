/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Button from './button';

import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';

import type {
  AudioSet,
  PlayBackType,
  RecordBackType,
} from 'react-native-audio-recorder-player';
import AudioRecorder from './recorder-player';

// const screenWidth = Dimensions.get('screen').width;

function App(): React.JSX.Element {
  const [data, setData] = useState({
    isLoggingIn: false,
    recordSecs: 0,
    recordTime: '00:00:00',
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00:00',
    duration: '00:00:00',
  });

  const audioRecorderPlayer = new AudioRecorderPlayer();

  audioRecorderPlayer.setSubscriptionDuration(0.1); // optional. Default is 0.5

  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Text style={styles.titleTxt}>Audio Recorder Player</Text>
  //     <Text style={styles.txtRecordCounter}>{data?.recordTime}</Text>
  //     <View style={styles.viewRecorder}>
  //       <View style={styles.recordBtnWrapper}>
  //         <Button
  //           style={styles.btn}
  //           // onPress={'this.onStartRecord'}
  //           textStyle={styles.txt}>
  //           Record
  //         </Button>
  //         <Button
  //           style={[
  //             styles.btn,
  //             {
  //               marginLeft: 12,
  //             },
  //           ]}
  //           // onPress={this.onPauseRecord}
  //           textStyle={styles.txt}>
  //           Pause
  //         </Button>
  //         <Button
  //           style={[
  //             styles.btn,
  //             {
  //               marginLeft: 12,
  //             },
  //           ]}
  //           // onPress={this.onResumeRecord}
  //           textStyle={styles.txt}>
  //           Resume
  //         </Button>
  //         <Button
  //           style={[styles.btn, {marginLeft: 12}]}
  //           // onPress={this.onStopRecord}
  //           textStyle={styles.txt}>
  //           Stop
  //         </Button>
  //       </View>
  //     </View>
  //     <View style={styles.viewPlayer}>
  //       <TouchableOpacity style={styles.viewBarWrapper}>
  //         <View style={styles.viewBar}>
  //           <View style={[styles.viewBarPlay, {width: 10}]} />
  //         </View>
  //       </TouchableOpacity>
  //       <Text style={styles.txtCounter}>kkkk</Text>
  //       <View style={styles.playBtnWrapper}>
  //         <Button
  //           style={styles.btn}
  //           // onPress={this.onStartPlay}
  //           textStyle={styles.txt}>
  //           Play
  //         </Button>
  //         <Button
  //           style={[
  //             styles.btn,
  //             {
  //               marginLeft: 12,
  //             },
  //           ]}
  //           // onPress={this.onPausePlay}
  //           textStyle={styles.txt}>
  //           Pause
  //         </Button>
  //         <Button
  //           style={[
  //             styles.btn,
  //             {
  //               marginLeft: 12,
  //             },
  //           ]}
  //           // onPress={this.onResumePlay}
  //           textStyle={styles.txt}>
  //           Resume
  //         </Button>
  //         <Button
  //           style={[
  //             styles.btn,
  //             {
  //               marginLeft: 12,
  //             },
  //           ]}
  //           // onPress={this.onStopPlay}
  //           textStyle={styles.txt}>
  //           Stop
  //         </Button>
  //       </View>
  //     </View>
  //   </SafeAreaView>
  // );

  return <AudioRecorder />;
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455A64',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleTxt: {
    marginTop: 100,
    color: 'white',
    fontSize: 28,
  },
  viewRecorder: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  recordBtnWrapper: {
    flexDirection: 'row',
  },
  viewPlayer: {
    marginTop: 60,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  viewBarWrapper: {
    marginTop: 28,
    marginHorizontal: 28,
    alignSelf: 'stretch',
  },
  viewBar: {
    backgroundColor: '#ccc',
    height: 4,
    alignSelf: 'stretch',
  },
  viewBarPlay: {
    backgroundColor: 'white',
    height: 4,
    width: 0,
  },
  playStatusTxt: {
    marginTop: 8,
    color: '#ccc',
  },
  playBtnWrapper: {
    flexDirection: 'row',
    marginTop: 40,
  },
  btn: {
    borderColor: 'white',
    borderWidth: 1,
  },
  txt: {
    color: 'white',
    fontSize: 14,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  txtRecordCounter: {
    marginTop: 32,
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '200',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 3,
  },
  txtCounter: {
    marginTop: 12,
    color: 'white',
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '200',
    fontFamily: 'Helvetica Neue',
    letterSpacing: 3,
  },
});

export default App;
