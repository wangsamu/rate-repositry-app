import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Formik } from "formik";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const initialValues = {
    userName: "",
    passWord: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12.5,
  },
});
export default SignIn;
