import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Storage } from 'aws-amplify';
import { View, Text, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Camera } from 'expo-camera';

export default function UploadVideo({ navigation }: ScreenProps) {
  const [platform] = useState(Platform.OS);
  const [s3Url, setS3Url] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [recording, setRecording] = useState(false);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const microphoneStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(cameraStatus.status === 'granted' && microphoneStatus.status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  const uploadToS3 = (name: string, file: any) => {
    Storage.put(name, file, {
        /* level: 'protected', */
        contentType: file.type ?? "",
    })
    .then((result) => {
        console.log(result);
        setS3Url(result.key);
    })
    .catch((err) => {
        console.log(err);
    });
  };

  const recordVideo = async () => {
    if (!!cameraRef) {
      if (!recording){
        setRecording(true)
        // @ts-ignore: Object is possibly 'null'.
        let video = await cameraRef.recordAsync();
        console.log('video', video);
        setVideo(video);
      } else {
          setRecording(false)
          // @ts-ignore: Object is possibly 'null'.
          cameraRef.stopRecording();
      }
    }
  };
  return (
    <View style={styles.container}>
      {
          (platform == "ios" || platform == "android") && 
          // @ts-ignore: Object is possibly 'null'.
          <Camera style={styles.camera} type={type} ref={ref => setCameraRef(ref)}>
            <View style={styles.exitContainer}>
              <TouchableOpacity
                  style={styles.exitButton}
                  onPress={() => navigation.navigate("feed")}>
                  <Ionicons name="ios-close-outline" size={45} color="white" />
              </TouchableOpacity>
            </View>
            <Stopwatch isRecording={recording} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                  style={styles.cameraButton}
                  onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}>
                  <Ionicons name="camera-reverse-outline" size={45} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.recordButton}
                  onPress={() => recordVideo()}>
                  <RecordButton isRecording={recording}/>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.cameraButton}
                  onPress={() => {
                    if (video) {
                      // @ts-ignore: Object is possibly 'null'.
                      const uri = video.uri;
                      const filename = uri.substring(uri.lastIndexOf('/')+1);
                      uploadToS3(filename, uri);
                      navigation.navigate("feed");
                    }
                  }}>
                  <Ionicons name="ios-cloud-upload-outline" size={45} color="white" />
              </TouchableOpacity>
            </View>
        </Camera>
      }
    </View>
  );
}

const RecordButton = (props: { isRecording: boolean }) => {
  return (
    <View style={styles.recordButtonOuterStyle}>
      <View style={props.isRecording ? styles.recordButtonInnerRecordingStyle : styles.recordButtonInnerStyle } />
    </View>
  );
};

const Stopwatch = (props: { isRecording: boolean }) => {
  const DEFAULT_TIME = "00:00:00";
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState(DEFAULT_TIME);

  const padZeros = (num: number) => (num.toString().padStart(2, '0'));
  const formatTime = (h: number, m: number, s: number) => (padZeros(h) + ":" + padZeros(m) + ":" + padZeros(s));
  useEffect(() => {
    if (props.isRecording) {
      // increment the count by 1
      const countTimer = setInterval(() => {
        setSeconds((prevCount) => prevCount + 1);
        if (Math.floor(seconds / 59) > 0) {
          setMinutes((prevMin) => prevMin + 1);
          setSeconds(() => 0);
        }
        if (Math.floor(minutes / 59) > 0) {
          setHours((prevHrs) => prevHrs + 1);
          setMinutes(() => 0);
          setSeconds(() => 0);
        }
        console.log(seconds);
        setTime(() => formatTime(hours, minutes, seconds));
      // every 1000 milliseconds
      }, 1000);
      // and clear this timer when the component is unmounted
      return function cleanup() {
        clearInterval(countTimer);
      };
    } else {
      setTime(() => DEFAULT_TIME);
      setHours(() => 0);
      setMinutes(() => 0);
      setSeconds(() => 0);
    }
  });

  return (
    <View style={styles.stopWatch}>
      <Text style={styles.stopWatchTime}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  stopWatch: {
    marginTop: -60,
    flex: 0.1,
    flexDirection: 'row',
    alignSelf: "center",
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
  },
  stopWatchTime: {
    color: 'white',
    textAlign: "center",
    margin: 5,
    fontSize: 20,
  },
  recordButton: {
    flex: 0.9,
    alignSelf: "flex-end",
    alignItems: 'center',
  },
  recordButtonOuterStyle: {
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 'white',
    height: 60,
    width: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: "center",
  },
  recordButtonInnerStyle: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'red',
    height: 50,
    width: 50,
    backgroundColor: 'red'
  },
  recordButtonInnerRecordingStyle: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'red',
    height: 20,
    width: 20,
    backgroundColor: 'red'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 50
  },
  cameraButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  text: {
    fontSize: 10,
    color: 'white',
  },
  exitContainer: {
    marginTop: 50,
    flex: 0.1,
    flexDirection: 'column',
    alignSelf: "flex-end",
    alignItems: 'flex-end',
  },
  exitButton: {

  },
});