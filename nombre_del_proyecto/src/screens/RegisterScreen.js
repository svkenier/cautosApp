import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
} from "react-native";
import StepperForm from "../components/StepperForm";
import { MaterialIcons } from "@expo/vector-icons";
import LogoCautos from "../components/LogoCautos";
import {useNavigation} from "@react-navigation/native"

const RegisterScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.fondo}>
      <SafeAreaView style={styles.root}>
        <View style={styles.title}>
          <View style={styles.icon}>
            <Pressable onPress={() => navigation.goBack()}>
              <MaterialIcons name="keyboard-backspace" size={50} color="#fff" />
            </Pressable>
          </View>
          <View style={styles.ContainerText}>
            <Text style={styles.text}>registrase</Text>
          </View>
        </View>

        <View style={styles.fondo}>
          <LogoCautos />
          <StepperForm style={styles.stepForm} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
   
    
  },
  containerButton: {
    width: "70%",
    alignItems: "flex-start",
    marginTop: 20,
  },
  text: {
    color: "gray",
    fontSize: 30,
    fontWeight: "bold",
  },

  buttons: {
    width: "100%",
    alignItems: "flex-start",
    marginTop: 30,
  },
  StepContainer: {
    alignItems: "flex-start",
    width: "72%",
  },
  stepTitle: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  containerInput: {
    gap: 10,
    width: "99%",
    alignItems: "flex-end",
  },
  fondo: {
    width: "100%",
    height: "100%",
    backgroundColor:
    "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
  stepForm: {
    height: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "flex-start",
    

  },
  icon: { 
    width: "12%",
    marginTop:30
  },

  ContainerText: { width: "90%", alignItems: "center",marginTop:30 },
});

export default RegisterScreen;
