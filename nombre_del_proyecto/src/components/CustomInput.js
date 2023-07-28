import { View, StyleSheet,Text } from "react-native";
import { TextInput } from "@react-native-material/core";
import React from "react";
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';


const CustomInput = ({icon,name,helperText,onBlur, value, onChangeText, placeholder, keyboardType }) => {
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
        icon={icon}
        
        placeholderTextColor="#000"
        
      />
      
      {
      icon=="user"&& <Text style={styles.containerIcon}><FontAwesome5  name="user" size={24} color="black" /></Text> || 
      icon=="email"&& <Text style={styles.containerIcon}><MaterialCommunityIcons name="email-outline" size={24} color="black" /></Text> ||
      icon=="id"&& <Text style={styles.containerIcon}><MaterialIcons name="badge" size={24} color="black" /></Text> ||
      icon=="phone"&& <Text style={styles.containerIcon}><MaterialIcons name="smartphone" size={24} color="black" /></Text> ||
      icon=="city"&& <Text style={styles.containerIcon}><MaterialIcons name="location-city" size={24} color="black" /></Text> ||
      icon=="location"&& <Text style={styles.containerIcon}><MaterialIcons name="location-on" size={24} color="black" /></Text> ||
      icon=="lock"&& <Text style={styles.containerIcon}><MaterialIcons name="lock-outline" size={24} color="black" /></Text> 
     }

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
  marginLeft:50, 
  },
  containerInput:{
    width:"95%",
    borderRadius:20,
    position:"relative"
  },
  containerIcon:{
    position:"absolute",
    left:15,
    top:15
  }

});

export default CustomInput;
