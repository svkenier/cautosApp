import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import { useFormikContext } from "formik";

const PersonalInfo = () => {
  const { values, handleChange } = useFormikContext();

  
  return (
    <View style={styles.root}>
      <View style={styles.StepContainer}>
        <Text style={styles.stepTitle}>Datos personales</Text>
      </View>

      <View style={styles.containerInput}>
        <CustomInput
          placeholder={"Nombre"}
          onChangeText={handleChange("name")}
          name="name"
          value={values.name}
        />

        <CustomInput
          placeholder={"Apellido"}
          onChangeText={handleChange("lastName")}
          name="lastName"
          value={values.lastName}
        />

        <CustomInput
          placeholder={"Correo"}
          onChangeText={handleChange("email")}
          name="email"
          value={values.email}
        />
        <CustomInput
          placeholder={"Cedula"}
          name="cedula"
          onChangeText={handleChange("cedula")}
          value={values.cedula}
        />
        <CustomInput
          placeholder={"Telefono"}
          onChangeText={handleChange("phone")}
          name="phone"
          value={values.phone}
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

export default PersonalInfo;
