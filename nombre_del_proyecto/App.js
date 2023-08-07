import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import MainApp from "./src/screens/MainApp";
import MapScreen from "./src/screens/MapScreen";




export default function App() {
  return (
    
    <SafeAreaView style={styles.root}>
      <MainApp />
    </SafeAreaView>
   
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:
      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
});
