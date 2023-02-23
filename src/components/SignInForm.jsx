import { View, Text, Pressable, StyleSheet, Dimensions } from "react-native";
import React from "react";
import FormikTextInput from "./FormikTextInput";

const SignInForm = ({ onSubmit }) => {
  //   const [usernameField, usernameMeta, usernameHelpers] = useField("username");
  //   const [passwordField, passwordMeta, passwordHelpers] = useField("password");

  return (
    <View style={styles.formContainer}>
      <FormikTextInput
        name="username"
        palceholder="username"
        style={styles.inputField}
      />
      <FormikTextInput
        name="password"
        palceholder="password"
        style={styles.inputField}
      />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: 300,
    height: 60,
    marginBottom: 20,
    backgroundColor: "yellow",
  },
  submitButton: {
    backgroundColor: "red",
  },
});
export default SignInForm;
