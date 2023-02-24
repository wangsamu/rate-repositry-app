import { View, Text, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.linkContainer}>
          <Text style={styles.linkText}>Repositories</Text>
        </Link>
        <Link to="sign-in" style={styles.linkContainer}>
          <Text style={styles.linkText}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    height: 70,
    backgroundColor: "#24292e",
  },
  linkContainer: { marginHorizontal: 20, justifyContent: "center" },
  linkText: { color: "white", fontSize: 15, fontWeight: "bold" },
});
export default AppBar;
