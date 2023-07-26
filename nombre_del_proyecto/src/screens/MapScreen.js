import { View, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import { GOOGLE_MAPS_KEY } from "@env";
import useBrowserAddress from "../hooks/useBrowserAddress";

import { Entypo } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const MapScreen = () => {
  const { address } = useBrowserAddress("Parque Rafael Urdaneta, Avenida Padilla Calle 93, Maracaibo, Zulia");
  const [origin, setOrigin] = useState({
    latitude: 10.65274,
    longitude: -71.63019,
  });

  const [destination, setDestination] = useState({
    latitude: 10.6450975,
    longitude: -71.6098553
  });

  const getCurrentPosition = async () => {
    const currentPosition = await Location.getCurrentPositionAsync({});
    // console.log(
    //   "currentPosition",
    //   currentPosition.coords.latitude,
    //   currentPosition.coords.longitude
    // );
    let latitude = currentPosition.coords.latitude;
    let longitude = currentPosition.coords.longitude;

    setOrigin({
      latitude,
      longitude,
    });
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // El usuario no ha otorgado permiso para acceder a la ubicación
      }

      getCurrentPosition();
    };

    requestPermissions();
  }, []);

  useEffect(() => {
    const getLocationInfo = async () => {
      Location.geocodeAsync(address)
        .then((result) => {
          const latitude = result[0].latitude;
          const longitude = result[0].longitude;

          setDestination({ latitude, longitude });
        })
        .catch((error) => console.log(error));
    };
    getLocationInfo();
  }, [address]);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        style={styles.map}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: origin.latitude,
            longitude: origin.longitude,
          }}
          draggable={true}
          onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
        />
        <Marker
          coordinate={{
            latitude: destination.latitude,
            longitude: destination.longitude,
          }}
          draggable={true}
          onDragEnd={(direction) =>
            setDestination(direction.nativeEvent.coordinate)
          }
        />
        <MapViewDirections
          origin={{ latitude: origin.latitude, longitude: origin.longitude }}
          destination={destination}
          apikey={GOOGLE_MAPS_KEY}
          strokeColor="#3C5DDC"
          strokeWidth={4}
        />
      </MapView>

   
        <View style={styles.menu}>
          <Entypo style={styles.iconMenu} name="menu" size={24} color="black" />
        </View>
        <View style={styles.myLocation}>
          <MaterialIcons
            style={styles.iconMyLocation}
            name="my-location"
            size={24}
            color="black"
          />
        </View>
    

      <View style={styles.containericonsDown}>
        <View style={styles.stopList}>
          <FontAwesome5
            style={styles.iconStopList}
            name="tasks"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.search}>
          <AntDesign
            style={styles.iconSearch}
            name="search1"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.requestServices}>
          <View style={styles.squareIcon}>
            <MaterialIcons
              style={styles.iconRequestServices}
              name="subdirectory-arrow-left"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  containericonsDown: {
    position: "absolute",
    
    width: "15%",
    height: "23%",
    alignItems: "center",
    justifyContent: "center",
    bottom: 10,
    right: 10,
    gap: 10,

    alignSelf: "flex-end",
  },
  stopList: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#001166",
    justifyContent: "center",
    alignItems: "center",
  },
  iconStopList: { fontSize: 20, margin: 10, color: "#fff" },

  search: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  iconSearch: {
    fontSize: 20,
    margin: 10,
    color: "#001166",
    fontWeight: "bold",
  },
  requestServices: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#001166",
    justifyContent: "center",
    alignItems: "center",
  },
  squareIcon: {
    width: "50%",
    height: "50%",
    backgroundColor: "#fff",
    transform: [{ rotate: "50deg" }],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    fontWeight: "bold",
    fontSize: 20,
  },
  iconRequestServices: {
    fontSize: 20,
    transform: [{ rotate: "130deg" }],
    fontWeight: "bold",
    color: "#001166",
  },
  menu: {
    position: "absolute",
    backgroundColor:"#fff",
    width:85,
    height:55,
    top:50,
    left:-10,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",

  },
  iconMenu:{
    fontSize:35,
  },

  myLocation:{
    position: "absolute",
    top:50,
    right:10,
    width:55,
    height:55,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:50,
  },
  iconMyLocation:{
    fontSize:35,
  }
});

export default MapScreen;
