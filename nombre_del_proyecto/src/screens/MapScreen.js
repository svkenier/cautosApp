import { View, StyleSheet, SafeAreaView, Pressable,Text } from "react-native";
import React, { useEffect, useState,useContext,useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import { GOOGLE_MAPS_KEY } from "@env";
import useBrowserAddress from "../hooks/useBrowserAddress";

import { Entypo } from "@expo/vector-icons";

import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StopsContext } from "../context/StopsContext";

const MapScreen = () => {
  const navigation = useNavigation();
  const {stops} = useContext(StopsContext)
  const { address} = useBrowserAddress();
  const [origin, setOrigin] = useState({
    latitude: 10.65274,
    longitude: -71.63019,
  });
  const mapViewRef = useRef(null);
  


  const getCurrentPosition = async () => {
    const currentPosition = await Location.getCurrentPositionAsync({});
   
    let latitude = currentPosition.coords.latitude;
    let longitude = currentPosition.coords.longitude;

    setOrigin({
      latitude,
      longitude,
    });

    const newRegion = {
      latitude: origin.latitude,
      longitude: origin.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    }

    mapViewRef.current.animateToRegion(newRegion);

  };

  console.log(address)

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



  return (
    <SafeAreaView style={styles.container}>
      <MapView
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
        ref={mapViewRef}
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
         
        {stops.length !== 0 ? ( 
           stops.map((item) => (
            <Text key={item.id}>
              <Marker
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                draggable={true}
                 onDragEnd={(direction) =>
                  setStops(direction.nativeEvent.coordinate)

                 }
              />
              <MapViewDirections
                origin={{
                  latitude: origin.latitude,
                  longitude: origin.longitude,
                }}
                destination={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                apikey={GOOGLE_MAPS_KEY}
                strokeColor="#3C5DDC"
                strokeWidth={4}
              />{" "}
            </Text>
          ))
        )  : (
          <MapViewDirections
            origin={{ latitude: origin.latitude, longitude: origin.longitude }}
            apikey={GOOGLE_MAPS_KEY}
            strokeColor="#3C5DDC"
            strokeWidth={4}
          />
        )}
      </MapView>

      <View style={styles.menu}>
        <Entypo style={styles.iconMenu} name="menu" size={24} color="black" />
      </View>

      <View style={styles.myLocation}>
      <Pressable onPress={()=>getCurrentPosition()}>
        <MaterialIcons
          style={styles.iconMyLocation}
          name="my-location"
          size={24}
          color="black"
          />
          </Pressable>
      </View>

      <View style={styles.containericonsDown}>
      <Pressable onPress={() => navigation.navigate("stopsList")}>

        <View style={styles.stopList}>
          <FontAwesome5
            style={styles.iconStopList}
            name="tasks"
            size={24}
            color="black"
            />
        </View>
            </Pressable>

        <Pressable onPress={() => navigation.navigate("browser")}>
          <View style={styles.search}>
            <AntDesign
              style={styles.iconSearch}
              name="search1"
              size={24}
              color="black"
            />
          </View>
        </Pressable>
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
    backgroundColor: "#fff",
    width: 85,
    height: 55,
    top: 50,
    left: -10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  iconMenu: {
    fontSize: 35,
  },

  myLocation: {
    position: "absolute",
    top: 50,
    right: 10,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    
  },
  iconMyLocation: {
    fontSize: 35,
   
  },
});

export default MapScreen;
