import * as React from "react";
import { SafeAreaView } from "react-native";
import { Video } from "expo-av";
import { PostSingleOverlay } from "./PostSingleOverlay";

export const PostSingle = React.forwardRef(({ post }: any, parentRef) => {
  const ref: any = React.useRef(null);
  // const user = useUser(item.creator).data
  React.useImperativeHandle(parentRef, () => ({
    play,
    unload,
    stop,
    pause,
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
  const pause = async () => {
    if (ref.current == null) {
      return;
    }

    // if video is already stopped return
    const status = await ref.current.getStatusAsync();
    if (!status?.isPlaying) {
      return;
    }
    try {
      await ref.current.pauseAsync();
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
      <PostSingleOverlay post={post} stop={stop} play={play} pause={pause} />
      <Video
        ref={ref}
        style={{
          flex: 1,
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
