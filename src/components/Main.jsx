import { View, StyleSheet, Platform, Text } from "react-native";
import React from "react";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Navigate, Route, Routes } from "react-router-native";
import SignIn from "./SignIn";
import { useFonts, Roboto_500Medium } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

console.log("patata2");
const Main = () => {
  const [fontsLoaded] = useFonts({ Roboto_500Medium });

  if (!fontsLoaded) {
    console.log("fonts not loaded!");
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="sign-in" element={<SignIn />} />
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
