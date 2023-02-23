import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TextInput from "./TextInput";
import { useField } from "formik";

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.errorText}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});

export default FormikTextInput;
