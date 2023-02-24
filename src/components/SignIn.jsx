import { View, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Formik } from "formik";
import SignInForm from "./SignInForm";
import * as yup from "yup";

const SignIn = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required!"),
    password: yup.string().required("Password is required!"),
  });

  const initialValues = {
    username: "",
    passWord: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
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
