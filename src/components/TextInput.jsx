import { TextInput as NativeTextInpu, StyleSheet } from "react-native";
import React from "react";

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInpu style={textInputStyle} {...props} />;
};

const styles = StyleSheet.create({});

export default TextInput;
