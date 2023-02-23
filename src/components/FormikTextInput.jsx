import { View, Text } from "react-native";
import React from "react";

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View>
      <Text>FormikTextInput</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});

export default FormikTextInput;
