import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TextInput from "./TextInput";
import { useField } from "formik";

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const showError = meta.touched && meta.error;

  if (showError) {
    console.log("showing error message!");
  }

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.inputField, showError && styles.error]}
        {...props}
      />
      {showError && <Text style={styles.errorMessage}>{meta.error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  inputField: {
    padding: 15,
    width: 300,
    height: 60,
    marginBottom: 20,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
  },
  error: { borderColor: "#d73a4a", marginBottom: 5 },
  errorMessage: {
    alignSelf: "flex-start",
    marginBottom: 15,
    marginLeft: 30,
    color: "#d73a4a",
  },
});

export default FormikTextInput;
