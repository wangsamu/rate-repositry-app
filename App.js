import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import createApolloClient from "./utils/apolloClient";

const apolloClient = createApolloClient();
export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}
