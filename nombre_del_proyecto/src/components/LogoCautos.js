import React from 'react'
import LogoCautos2 from "../../assets/images/cautos2.png";
import { View,Image,StyleSheet,useWindowDimensions } from 'react-native';

const LogoCautos = () => {
  const { height } = useWindowDimensions();
    return (
        <View >
            <Image
            source={LogoCautos2}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
            /> 
        </View>
      )
    }
    const styles = StyleSheet.create({
      root: {
        alignItems: "center",
        padding:10
       
      },
        logo: {
          width: "100%",
          height: 600,  
        },
        
    })

export default LogoCautos