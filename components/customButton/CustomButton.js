import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      style={[styles.root, styles[`button_${type}`],bgColor?{backgroundColor:bgColor}:{}]}
      onPress={onPress}
    >
      <Text style={[styles.text,styles[`text_${type}`],fgColor?{color:fgColor}:{}]}>{text}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  root: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  button_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  text: {
   
    fontWeight: "bold",
  },
  text_PRIMARY: {
    color: "white",
  },
  text_TERTIARY: {
    color:'gray'
  }
});

export default CustomButton;
