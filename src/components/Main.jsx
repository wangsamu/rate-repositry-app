import { View, Text, StyleSheet } from "react-native";
import React from "react";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";

console.log("patata2");
const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
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
