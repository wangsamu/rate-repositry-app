import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Link } from "react-router-native";

const AppBar = () => {
  return (
    <View style={styles.container}>
      {/* <Pressable style={{ backgroundColor: "grey", marginHorizontal: 20 }}> */}
      <Link to="/" style={{ backgroundColor: "grey", marginHorizontal: 20 }}>
        <Text style={{ color: "white" }}>Repositories</Text>
      </Link>
      {/* </Pressable> */}
      {/* <Pressable style={{ backgroundColor: "grey" }}> */}
      <Link
        to="sign-in"
        style={{ backgroundColor: "grey", marginHorizontal: 20 }}
      >
        <Text style={{ color: "white", marginHorizontal: 20 }}>Sign in</Text>
      </Link>
      {/* </Pressable> */}
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
