import * as React from "react";
import { useState } from "react";
import { Storage } from 'aws-amplify';
import { Button, View, Text, Platform } from "react-native";
import { DocumentPickerResponse, pick, types, isCancel } from 'react-native-document-picker';
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function UploadVideo({ navigation }: ScreenProps) {
  const [platform] = useState(Platform.OS);
  const [name, setName] = useState("");
  const [videoCharacteristics, setVideoCharacteristics] = useState("");
  const [status, setStatus] = useState("");
  const [s3Url, setS3Url] = useState("");
  const pickFileFromDevice = () => {
        const { audio, video, images } = types;
        // Pick a single file
        pick({
            type: [images, audio, video],
        })
        .then(res => {
            console.log(res)
            setName(res[0].name);
            setVideoCharacteristics(`${res[0].uri}, ${res[0].type}, ${res[0].name}, ${res[0].size}`);
            uploadToS3(res[0]);
        })
        .catch(err => {
            if (isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err
            }
        });
  };
  const uploadToS3 = (file: DocumentPickerResponse) => {
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
          <Button title="Pick file" onPress={() => pickFileFromDevice()} />
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