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
        ref={ref}
        style={{
          height: Dimensions.get("window").height,
        }}
        shouldPlay={true}
        isLooping
        resizeMode={Video.RESIZE_MODE_CONTAIN}
        // usePoster
        // posterSource={{ uri: item.media[1] }}
        // posterStyle={{ resizeMode: "cover", height: "100%" }}
        // source={{ uri: item.media[0] }}
        source={{
          uri: "https://awsdisaster-s3-1111414-dev.s3.amazonaws.com/public/pexels-cottonbro-7170787-Cellular-High.mp4?AWSAccessKeyId=ASIA2ESZGVHTPHASVRWM&Expires=1640308884&Signature=SyHgDGyMWWkuO5WwriUcmMwy%2BDQ%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFoaCXVzLWVhc3QtMSJIMEYCIQCdjL6i2rgqQGSpNikRewV%2FcAkWDLNSbUMXrg6UeWGObwIhAPrS5SH8Q4oZf87uVHGZHNVsrK%2BvVn4FPVpvaf8F2DMHKsQECFIQABoMNjk3MDQ1NTI3MDE0IgzQRu0r9gPU4q1iTokqoQQrBAR3QYBGgu3PDGvj42a7j2Lo2Mfi4bDPaZiqntcmrw4vWF1fqj5GFbgkcDLezG47zcXpsx4arlCPi1UXcELBAlkzTMH3gCV%2BeaOG7tnUJ%2BmkSah2jKQkWrA6NDFHmz5Aglz%2FEJ9dauPlvwYI38MdFJ%2B%2F8Ctu71%2FZ3q9j6gBWmJHWAvP6XY5tkwblWbjf2WsMEKehm3NdQv7zkLQtQtktg1zV0yEKbj3WiP3ckmLohwL5G2Q3MUPV4kh3Em1iCU%2FQgCDLeIhDH%2BqkrBRtBKekGU%2Fyeo1O2GwuiGiU7h%2FDXi31D%2B4qddavNaVtzgqdjl4h2nVafF%2BQ%2BJHYYbURBAc8K1vC47C7AeQ1g0Hu7%2Bf34ksjGQtxwSZCuOit1n6opyhHj0Cw4qavvZzHcp0yg%2B4XpqO9T9x1pSIuUb2Ts%2FxeJVa2oym7FqDoMleKcx%2BQLI3U0Y%2BcvkWul%2Bdy1tlqp%2FyutS9eIoFL7wuqUfKYOhvp%2F4r08jtcxw66dzKG7z458PDMbnO9WlA00npCg%2B9d%2F7rI5MickDMjalurgKIo9xVZYGyQTUcJYpWzUi7oaO2IUSnxz1uXSyMsr0gDbowzr384uKVPYMPnuuG5mqBskNn%2B8IhcuixDdsLVUNF78ne7HG071ev8KB0LvYeoZrVAdl3HBp1VDy23XUrjiIL%2Bqw1MtQg8SMoEsmGW3sUXuWscKbrZcN8sV%2B58hSCdNdyjFVAZvDDhvZSOBjqEAp%2FUvA%2BXjiD%2BVpjS0J7FEzHwmMIjdF1bXxVCykIjqlj6XqlPiDTcNfQcZEpJKZ7kgL%2BmT6DmW8z%2FzrkHd%2Bx4wqjK6U8NSYyUQZlsVxCdra0mynmyKC%2Bf2dWB2Fdoza9GdADF80KjJaICG28%2B03NQPOFexiDUc6ht1%2Fig5ZWA4xIdFRjw4dnYT890tiXI7cm7yJWtyWhRA6rXTjIAr5Xke3tbT4Ih5zDw%2FSUOQOtIpj5TXsmKVCjdn6ZI5H0YAb6ABoANvVrKAZnpent5ViKIUL%2BUS0gtudaROaulow%2BokqOj2ab21ftH17NQRw%2BNpVuDyvcwHVMLfSN%2FFQFKjU5B5J4A6hlV",
        }}
      />
    </>
  );
});

export default function Feed(props: ScreenProps) {
  const mediaRefs: any = React.useRef([]) as React.MutableRefObject<
    typeof VideoPlayer[]
  >;

  const { data } = useQuery("incidents", async () =>
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

  const renderItem = ({ item, index }: any) => {
    return (
      <View
        style={{
          height: Dimensions.get("window").height,
          backgroundColor: "black",
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
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
      )}
    </View>
  );
}
