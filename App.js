import { ApolloClient, ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";

export default function App() {
  return (
    <ApolloProvider client={ApolloClient}>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  );
}
