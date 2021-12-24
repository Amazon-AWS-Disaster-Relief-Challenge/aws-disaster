import * as React from "react";
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import Amplify from "aws-amplify";

import config from "./src/aws-exports";
import Main from "./src/navigation/Main";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default withAuthenticator(App);
