import * as React from "react";
import { Button, Dimensions, FlatList, Text, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listIncidents } from "../graphql/queries";
import { useQuery } from "react-query";

export default function Feed({ navigation, route }: ScreenProps) {
  const { data } = useQuery("incidents", async () =>
    API.graphql(
      graphqlOperation(listIncidents, {
        limit: 10,
      })
    )
  );

  const renderItem = ({ _, i }: any) => {
    return (
      <View
        style={{
          height: Dimensions.get("window").height - 50,
          backgroundColor: "#ddd",
        }}
      >
        <Text>Video</Text>
        {/* <PostSingle
          item={item}
          ref={(PostSingleRef) => (mediaRefs.current[item.id] = PostSingleRef)}
        /> */}
      </View>
    );
  };
  // console.log("route", route);
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
{
  /* <View style={{ zIndex: 1, position: "absolute", bottom: 0 }}>
  <Text>{data ? data.length : "none"}</Text>
  <Button title="Go to Other" onPress={() => navigation.navigate("Other")} />
</View>; */
}
