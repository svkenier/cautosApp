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

const RegisterScreen = ({ closeAllModals }) => {
  return (
    <ScrollView style={styles.fondo}>
      <SafeAreaView style={styles.root}>
        <View style={styles.title}>
          <View style={styles.icon}>
            <Pressable onPress={closeAllModals}>
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
  },
  stepForm: {
    height: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    maxHeight: 100,
    justifyContent: "center",
  },
  icon: { width: "10%" },

  ContainerText: { width: "90%", alignItems: "center" },
});

export default RegisterScreen;
