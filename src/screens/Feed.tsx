import * as React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listIncidents } from "../graphql/queries";
import { useQuery } from "react-query";
import { Video } from "expo-av";
import VideoPlayer from "expo-video-player";

export const PostSingle = React.forwardRef(({ item }: any, parentRef) => {
  const ref: any = React.useRef(null);
  // const user = useUser(item.creator).data
  React.useImperativeHandle(parentRef, () => ({
    play,
    unload,
    stop,
  }));

  React.useEffect(() => {
    return () => unload();
  }, []);

  const play = async () => {
    if (ref.current == null) {
      return;
    }

    const status = await ref.current.getStatusAsync();
    if (status?.isPlaying) {
      return;
    }
    try {
      await ref.current.playAsync();
    } catch (e) {
      console.log(e);
    }
  };

  const stop = async () => {
    if (ref.current == null) {
      return;
    }

    // if video is already stopped return
    const status = await ref.current.getStatusAsync();
    if (!status?.isPlaying) {
      return;
    }
    try {
      await ref.current.stopAsync();
    } catch (e) {
      console.log(e);
    }
  };

  const unload = async () => {
    if (ref.current == null) {
      return;
    }

    // if video is already stopped return
    try {
      await ref.current.unloadAsync();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {/* <PostSingleOverlay user={user} post={item} /> */}
      <Video
        // ref={ref}
        style={{
          flex: 1,
          height: Dimensions.get("window").height,
          // width: Dimensions.get("window").width,
        }}
        shouldPlay={false}
        isLooping
        resizeMode={Video.RESIZE_MODE_COVER}
        // usePoster
        // posterSource={{ uri: item.media[1] }}
        // posterStyle={{ resizeMode: "cover", height: "100%" }}
        // source={{ uri: item.media[0] }}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
      />
    </>
  );
});

interface FlatListItem {
  id: string;
  media: string[];
  [key: string]: any;
}

export default function Feed() {
  const mediaRefs: any = React.useRef([]) as React.MutableRefObject<
    typeof VideoPlayer[]
  >;

  const { data } = useQuery<any>("incidents", async () =>
    API.graphql(
      graphqlOperation(listIncidents, {
        limit: 10,
      })
    )
  );

  const onViewableItemsChanged = React.useRef(({ changed }: any) => {
    changed.forEach((element: any) => {
      const cell = mediaRefs.current[element.key];
      if (cell) {
        if (element.isViewable) {
          // if (!profile) {
          //     setCurrentUserProfileItemInView(element.item.creator)
          // }
          cell.play();
        } else {
          cell.stop();
        }
      }
    });
  });

  const renderItem = ({ item }: { item: FlatListItem }) => {
    return (
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <PostSingle
          item={item}
          ref={(PostSingleRef) => (mediaRefs.current[item.id] = PostSingleRef)}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {data && (
        <FlatList
          data={data.data.listIncidents.items}
          renderItem={renderItem}
          keyExtractor={(item: FlatListItem) => item.id}
          decelerationRate={"normal"}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
      )}
    </View>
  );
}
