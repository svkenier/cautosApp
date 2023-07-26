import React from "react";
import { Text, View, StyleSheet } from "react-native";

import CustomInput from "./CustomInput";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import useForm from "../hooks/useForm";

const UserAndPassInfo = () => {
  const { values, handleChange } = useFormikContext();


  return (
    <View style={styles.root}>
      <View style={styles.StepContainer}>
        <Text style={styles.stepTitle}>Usuario y contraseña</Text>
      </View>
      <View style={styles.containerInput}>
        <CustomInput
          placeholder={"Nombre de usuario"}
          onChangeText={handleChange("userName")}
          name="userName"
          value={values.userName}
        />
        <CustomInput
          placeholder={"Contraseña"}
          onChangeText={handleChange("password")}
          name="password"
          value={values.password}
        />
        <CustomInput
          placeholder={"Confirmar Contraseña"}
          onChangeText={handleChange("confirmPassword")}
          name="confirmPassword"
          value={values.confirmPassword}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: "center",

    paddingTop: 5,
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
    gap: 20,
    width: "98%",
    alignItems: "flex-end",
  },
});

export default UserAndPassInfo;
