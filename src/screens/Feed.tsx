import * as React from "react";
import { Dimensions, FlatList, SafeAreaView, Text, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";
import { useQuery } from "react-query";
import VideoPlayer from "expo-video-player";
import { PostSingle } from "../components/PostSingle";
import { PostSingleOverlay } from "../components/PostSingleOverlay";

export function Modal() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

interface FlatListItem {
  id: string;
  media: string[];
  [key: string]: any;
}
const data: any = [
  {
    id: "3",
    title: "Flood",
    videoUrl:
      "https://res.cloudinary.com/amplestream/video/upload/v1644093611/Fake_Videos-4K_copy_t9zcas.mp4",
  },
  {
    id: "2",
    title: "Fire",
    videoUrl:
      "https://res.cloudinary.com/amplestream/video/upload/v1644093605/Fake_Videos-4K_copy_2_nyl1jf.mp4",
  },
  {
    id: "1",
    title: "Tornado",
    videoUrl:
      "https://res.cloudinary.com/amplestream/video/upload/v1644093610/Fake_Videos-4K_avv5aa.mp4",
  },
];
export default function Feed() {
  const mediaRefs: any = React.useRef([]) as React.MutableRefObject<
    typeof VideoPlayer[]
  >;

  // const { data } = useQuery<any>("posts", async () =>
  //   API.graphql(
  //     graphqlOperation(listPosts, {
  //       limit: 4,
  //     })
  //   )
  // );

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

  const renderItem = ({ item: post }: { item: FlatListItem }) => {
    return (
      <View
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          //   flex: 1,
          //   justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <PostSingle
          post={post}
          ref={(PostSingleRef) => (mediaRefs.current[post.id] = PostSingleRef)}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {data && (
        <FlatList
          windowSize={4}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item: FlatListItem) => item.id}
          decelerationRate="fast"
          onViewableItemsChanged={onViewableItemsChanged.current}
          snapToAlignment="center"
          snapToInterval={Dimensions.get("window").height}
        />
      )}
    </View>
  );
}
