import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

console.log("patata2");
const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    flexGrow: 1,
    backgroundColor: "#e1e4e8",
  },
});
export default Main;
