import React from "react";
import { useContext } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { StopsContext } from "../context/StopsContext.jsx";
import ItemStops from "../components/ItemStops";

const StopsListScreen = () => {
  const { stops } = useContext(StopsContext);
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.fondo}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>LISTA DE PARADAS</Text>

          <View style={styles.showStops}>
            {stops.length === 0 ? (
              <Text style={styles.showStopsTitle}>
                aún no has elegido ninguna parada
              </Text>
            ) : (
              <View>
                {stops.map((item, index) => (
                  <ItemStops key={index} index={index + 1} item={item} />
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={styles.containerButton}>
          <CustomButton
            textButton="LIMPIAR DE EL MAPA"
            typeButton="terseary"
            typeText="secondary"
            iconLeft="replay"
            iconRight="map"
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
    backgroundColor: "#fff",
    flex: 1,
    zIndex: 2,
  },

  fondo: {
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  containerButton: {
    marginBottom: 40,
    alignItems: "center",
  },

  containerTitle: { marginTop: 60, alignItems: "center", gap: 20 },

  title: { fontSize: 20, fontWeight: "bold", color: "#020126" },

  showStops: { alignItems: "center", width: "100%" },

  showStopsTitle: {},
});

export default StopsListScreen;
