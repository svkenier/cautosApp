import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import useForm from "../hooks/useForm";

const AddressInfo = () => {
  // const { handleChange, handleSubmit } = useForm();
  const { values, handleChange } = useFormikContext();


  return (
    <View style={styles.root}>
      <View style={styles.StepContainer}>
        <Text style={styles.stepTitle}>Dirección</Text>
      </View>
      <View style={styles.containerInput}>
        <CustomInput
          placeholder={"Ciudad"}
          onChangeText={handleChange("city")}
          name="city"
          value={values.city}
        />
        <CustomInput
          placeholder={"Municipio"}
          onChangeText={handleChange("town")}
          name="city"
          value={values.town}
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

export default AddressInfo;
