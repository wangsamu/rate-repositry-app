import { View, Text, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={{ backgroundColor: "grey", marginHorizontal: 20 }}>
          <Text style={{ color: "white" }}>Repositories</Text>
        </Link>
        <Link
          to="sign-in"
          style={{ backgroundColor: "grey", marginHorizontal: 20 }}
        >
          <Text style={{ color: "white", marginHorizontal: 20 }}>Sign in</Text>
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
});
export default AppBar;
