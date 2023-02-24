import { View, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const SignInForm = ({ onSubmit }) => {
  //   const [usernameField, usernameMeta, usernameHelpers] = useField("username");
  //   const [passwordField, passwordMeta, passwordHelpers] = useField("password");

  return (
    <View style={styles.formContainer}>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput name="password" placeholder="password" />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    alignItems: "center",
    paddingTop: 200,
  },
  submitButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 50,
    backgroundColor: "#0366d6",
  },
  submitButtonText: {
    color: "white",
  },
});
export default SignInForm;
