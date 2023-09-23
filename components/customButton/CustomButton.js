import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
  icon
}) => {
  return (
    <Pressable
      style={[styles.root, styles[`button_${type}`],bgColor?{backgroundColor:bgColor}:{},icon?{display:"flex"}:{}]}
      onPress={onPress}
    >
      {icon?<Image source={icon} resizeMode="contain"/>:''}
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
  button_SECONDARY: {
    backgroundColor: "transparent",
    borderWidth: 1,
  borderColor:"#3B71F3"
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
