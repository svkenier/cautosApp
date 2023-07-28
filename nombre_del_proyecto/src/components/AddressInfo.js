import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import useForm from "../hooks/useForm";

const AddressInfo = () => {
  // const { handleChange, handleSubmit } = useForm();
  const { values, handleChange,handleBlur,touched,errors } = useFormikContext();


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
          helperText={errors.city && touched.city && <Text style={styles.error}>{errors.city}</Text> }
          onBlur={handleBlur("city")}
          icon="city"
        />
        <CustomInput
          placeholder={"Municipio"}
          onChangeText={handleChange("town")}
          name="town"
          value={values.town}
          helperText={errors.town && touched.town && <Text style={styles.error}>{errors.town}</Text> }
          onBlur={handleBlur("town")}
          icon="location"
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
  error:{
    color:"red",
    fontWeight:"bold",
    fontSize:10,
  },
});

export default AddressInfo;
