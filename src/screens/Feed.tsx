import * as React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listIncidents } from "../graphql/queries";
import { useQuery } from "react-query";
import VideoPlayer from "expo-video-player";
import { PostSingle } from "../components/PostSingle";

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
      <Modal />
    </View>
  );
}
