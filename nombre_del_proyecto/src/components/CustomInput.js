import { View, StyleSheet } from "react-native";
import { TextInput } from "@react-native-material/core";
import React from "react";


const CustomInput = ({name,helperText,onBlur, value, onChangeText, placeholder, keyboardType }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        name={name}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onBlur={ onBlur }
        variant="standard"
        helperText={helperText}
        inputContainerStyle={styles.containerInput}
       
        
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
  
    
  },

  input: {
  marginLeft:40, 
  },
  containerInput:{
 
    width:"95%",
    borderRadius:20,
    
   
  }

});

export default CustomInput;
