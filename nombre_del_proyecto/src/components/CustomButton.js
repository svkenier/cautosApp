import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

const CustomButton = ({iconLeft,iconRight, textButton, typeButton, typeText, handlePress }) => {
  return (
    <Pressable onPress={handlePress} style={[styles.container, styles[`container_${typeButton}`]]}>
      {iconLeft === "replay" && <Text style={styles.icon}><MaterialIcons name="replay" size={24} color="#fff" /></Text>||
       iconLeft===   "back" && <Text style={styles.icon}><MaterialIcons name="undo" size={24} color="#fff" /></Text>
      }
      
      <Text style={[styles.text, styles[`text_${typeText}`]]}>{textButton}</Text>
    {iconRight === "map" && <Text style={styles.icon}><MaterialIcons name="map" size={24} color="#fff" /></Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 20,
    flexDirection:'row',
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
  icon:{
    marginHorizontal :10
  }
});

export default CustomButton;
