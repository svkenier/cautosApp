import React from "react";
import { View, StyleSheet, Text, SafeAreaView,onPress } from "react-native";
import CustomInput from "../components/CustomInput";
import useBrowserAddress from "../hooks/useBrowserAddress";
import CustomButton from "../components/CustomButton";
import MapScreen from "./MapScreen";
import {useNavigation} from "@react-navigation/native"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from "@env";

const BrowserScreen = () => {
  const navigation = useNavigation()
  const { handleAddress, address } = useBrowserAddress();
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.fondo}>
        {/* titulo y buscador */}
        <View style={{ marginTop: 60, alignItems: "center", gap: 20 }}>

          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#020126" }} >¿A DONDE QUIERES IR?</Text>

           

<GooglePlacesAutocomplete
  placeholder='Ingresa una dirección'
  onPress={(data, details = null) => {
    const {description} = data
    console.log("description",description);
    handleAddress(description)
    navigation.goBack()

     // const { lat, lng } = details.geometry.location;
    // console.log("ubicacion de  Browser",{lat,lng});
  }}
  query={{
    key: GOOGLE_MAPS_KEY,
    language: 'es',
    types: 'address',
    components: 'country:ve'
  }}
  styles={{
    container: { position: 'absolute', top: 0, left: 0, right: 0,width:"100%" ,paddingHorizontal:15,marginTop:55 },
    textInput:{borderColor:"#888",borderWidth:1,borderRadius:20, },
    listView: { backgroundColor: 'white' }
  }}
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
