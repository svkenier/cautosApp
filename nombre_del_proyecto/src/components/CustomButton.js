import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ textButton, typeButton, typeText, handlePress }) => {
  return (
    <Pressable onPress={handlePress} style={[styles.container, styles[`container_${typeButton}`]]}>
      <Text style={[styles.text, styles[`text_${typeText}`]]}>{textButton}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 20,
  },
  container_primary: {
    backgroundColor: "#ffffff",
  },
  container_secondary: {
    backgroundColor: "#34fecc",
  },

  container_terseary:{
    backgroundColor:"#020126"
  },

  text_primary: {
    color: "#1a2250",
  },
  text_secondary: {
    color:"#fff"
  },
  text: {
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});

export default CustomButton;
