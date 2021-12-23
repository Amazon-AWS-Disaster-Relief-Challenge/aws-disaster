import * as React from "react";
import {
  Button,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listIncidents } from "../graphql/queries";
import tailwind from "tailwind-rn";
import { useQuery } from "react-query";

const Item = ({ id, title, type }: any) => (
  <View style={tailwind("w-full mt-2 p-5 mb-2 border-b")}>
    <Text>{id}</Text>
    <Text>{title}</Text>
    <Text>{type}</Text>
  </View>
);

export function Feed({ navigation, route }: ScreenProps) {
  console.log("route", route);

  const { data } = useQuery("incidents", async () =>
    API.graphql(
      graphqlOperation(listIncidents, {
        limit: 10,
      })
    )
  );

  // const renderItem = ({ item }: any) => <Item title={item.title} />;

  const renderItem = ({ _, i }: any) => {
    return (
      <View
        style={{
          height: Dimensions.get("window").height - 50,
          backgroundColor: "#ddd",
        }}
      >
        <Text>Hello</Text>
        {/* <PostSingle
          item={item}
          ref={(PostSingleRef) => (mediaRefs.current[item.id] = PostSingleRef)}
        /> */}
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        // position: "absolute",
        // width: "100%",
        // height: "100%",
      }}
    >
      {data && (
        <>
          <FlatList
            data={data.data.listIncidents.items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            decelerationRate={"normal"}
            // style={tailwind("bg-white z-0")}
          />

          {/* <View style={{ zIndex: 1, position: "absolute", bottom: 0 }}>
            <Text>{data ? data.length : "none"}</Text>
            <Button
              title="Go to Other"
              onPress={() => navigation.navigate("Other")}
            />
          </View> */}
        </>
      )}
    </View>
  );
}
