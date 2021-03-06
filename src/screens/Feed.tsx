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

export default function Feed() {
  const mediaRefs: any = React.useRef([]) as React.MutableRefObject<
    typeof VideoPlayer[]
  >;

  const { data } = useQuery<any>("posts", async () =>
    API.graphql(
      graphqlOperation(listPosts, {
        limit: 4,
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
          data={data.data.listPosts.items}
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
