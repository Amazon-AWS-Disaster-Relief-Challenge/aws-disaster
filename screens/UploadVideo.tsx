import * as React from "react";
import { useState, useEffect } from "react";
import { Storage } from 'aws-amplify';
import { Button, View, Text, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from 'expo-camera';
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function UploadVideo({ navigation }: ScreenProps) {
  const [platform] = useState(Platform.OS);
  const [name, setName] = useState("");
  const [videoCharacteristics, setVideoCharacteristics] = useState("");
  const [status, setStatus] = useState("");
  const [s3Url, setS3Url] = useState("");
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
  
  const uploadToS3 = (file: any) => {
    Storage.put(name, file, {
        /* level: 'protected', */
        contentType: file.type ?? "",
    })
    .then((result) => {
        console.log(result);
        setStatus(`Success uploading file: ${name}!`);
        setS3Url(result.key);
    })
    .catch((err) => {
        console.log(err);
        setStatus(`Can't upload file: ${err}`);
    });
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Text>{ videoCharacteristics }</Text>
      <Text>{ status }</Text>
      {
          (platform == "ios" || platform == "android") && 
          <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                    setType(
                        type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                    }}>
                    <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
                </View>
            </Camera>
          </View>
      }
      {
        !!s3Url &&
        <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
                source: {
                    uri: s3Url,
                },
            }}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });