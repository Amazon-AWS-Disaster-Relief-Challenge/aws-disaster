import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import { Video } from "expo-av";
import tailwind from "tailwind-rn";

export function PostSingleOverlay({ post }: any) {
  // console.log(
  //   "🚀 ~ file: PostSingle.tsx ~ line 7 ~ PostSingleOverlay ~ post",
  //   post
  // );
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        position: "absolute",
        zIndex: 999,
        bottom: 0,
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <Text style={tailwind("text-3xl text-black")}>Title: {post.title}</Text>
    </View>
  );
}

export const PostSingle = React.forwardRef(({ post }: any, parentRef) => {
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
      <PostSingleOverlay post={post} />
      <Video
        ref={ref}
        style={{
          flex: 1,
          // height: Dimensions.get("window").height,
          // // width: Dimensions.get("window").width,
        }}
        shouldPlay={true}
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
