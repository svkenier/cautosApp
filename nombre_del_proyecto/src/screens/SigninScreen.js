import { View, Text, StyleSheet, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";

import CustomButton from "../components/CustomButton";
import RegisterScreen from "./RegisterScreen";
import LogoCautos from "../components/LogoCautos";
import useModals from "../hooks/useModals";
import PhoneInput from "react-native-phone-number-input";

const SigninScreen = () => {
  const [phone, setPhone] = useState("");
  const { openModalRegister, handleModalRegister, closeAllModals } =
    useModals();
    console.log("login")
  return (
    <View style={styles.root}>
      <View style={styles.fondo}>
        <LogoCautos />
      </View>

      <View style={styles.containerText}>
        <Text style={styles.text}>Ingresa tu número de teléfono</Text>
      </View>

      <PhoneInput
        defaultCode="VE"
        containerStyle={{ borderRadius: 50 }}
        textContainerStyle={{ borderRadius: 50 }}
        placeholder="Numero telefonico"
      />
      <View style={styles.buttons}>
        <CustomButton
          textButton="continuar"
          typeButton="primary"
          typeText="primary"
        />

        <CustomButton
          textButton="registrate"
          typeButton="secondary"
          typeText="primary"
          handlePress={handleModalRegister}
        />
      </View>

      <Modal visible={openModalRegister} animationType="slide">
        <SafeAreaView style={styles.fondo}>
          <RegisterScreen closeAllModals={closeAllModals} />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 10,
  },
  containerText: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 15,
  },
  text: {
    color: "gray",
    fontSize: 22,
    fontWeight: "bold",
  },

  buttons: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  fondo: {
    width: "100%",
    backgroundColor:
      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
});

export default SigninScreen;
