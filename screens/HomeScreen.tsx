import * as React from "react";
import { Button, Text, View } from "react-native";
import { API, graphqlOperation } from "aws-amplify";
import { listIncidents } from "../src/graphql/queries";

export function HomeScreen({ navigation }) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const result = await API.graphql(
          graphqlOperation(listIncidents, {
            limit: 10,
          })
        );

        setData(result.data.listIncidents.items);
      } catch (err) {
        console.log("error fetching data", err);
      }
    };
    getData();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{data ? data.length : "none"}</Text>
      <Button
        title="Go to Other"
        onPress={() => navigation.navigate("Other")}
      />
    </View>
  );
}
