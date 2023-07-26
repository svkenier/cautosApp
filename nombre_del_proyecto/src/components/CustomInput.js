import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";


const CustomInput = ({onBlur, value, onChangeText, placeholder, keyboardType }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onBlur={() => onBlur && onBlur("name")}
       
        
        placeholderTextColor="#000"
        

      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    width: "90%",
    borderColor: "e8e8e8",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    
  },

  input: {
  
  },
});

export default CustomInput;
