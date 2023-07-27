import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import CustomInput from "../components/CustomInput";
import useBrowserAddress from "../hooks/useBrowserAddress";
import CustomButton from "../components/CustomButton";
import MapScreen from "./MapScreen";
import {useNavigation} from "@react-navigation/native"

const BrowserScreen = () => {
  const navigation = useNavigation()
  const { setAddress, address } = useBrowserAddress();
  console.log("first")
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.fondo}>
        {/* titulo y buscador */}
        <View style={{ marginTop: 60, alignItems: "center", gap: 20 }}>

          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#020126" }} >¿A DONDE QUIERES IR?</Text>

          <CustomInput
            placeholder="Direccion"
            value={address}
            onChangeText={setAddress}

          />
        </View>

        
        {/* boton */}

        <View style={{ marginBottom: 40, alignItems: "center" }}>
          <CustomButton 
          handlePress={() => navigation.goBack()}
          textButton="seleccionar en el mapa"
            typeButton="terseary"
            typeText="secondary"
          />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
    backgroundColor: '#fff',
    flex:1,
    zIndex:2,
  },

  fondo: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between"

  },
});

export default BrowserScreen;
