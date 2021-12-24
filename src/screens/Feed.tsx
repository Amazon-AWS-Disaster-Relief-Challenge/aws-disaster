import * as React from "react";
import { FlatList, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listIncidents } from "../graphql/queries";
import { useQuery } from "react-query";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

export default function Feed(props: ScreenProps) {
  const { data } = useQuery("incidents", async () =>
    API.graphql(
      graphqlOperation(listIncidents, {
        limit: 10,
      })
    )
  );

  const renderItem = () => {
    return (
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_STRETCH,
          source: {
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          },
        }}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {data && (
        <FlatList
          data={data.data.listIncidents.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          decelerationRate={"normal"}
        />
      )}
    </View>
  );
}
