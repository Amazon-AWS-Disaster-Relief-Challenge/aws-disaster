import * as React from "react";
import {
  Button,
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

export function HomeScreen({ navigation }: ScreenProps) {
  const { data } = useQuery("incidents", async () =>
    API.graphql(
      graphqlOperation(listIncidents, {
        limit: 10,
      })
    )
  );

  const renderItem = ({ item }: any) => <Item title={item.title} />;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Button
        title="Your Baby"
        onPress={() => navigation.navigate("NewPost")}
      />
      {data && (
        <>
          <FlatList
            data={data.data.listIncidents.items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={tailwind("w-full px-4 bg-white h-full z-0")}
          />

          <View style={{ zIndex: 1, position: "absolute", bottom: 0 }}>
            <Text>{data ? data.length : "none"}</Text>
            <Button
              title="Go to Other"
              onPress={() => navigation.navigate("Other")}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
