import React from "react";
import { Text, View, StyleSheet } from "react-native";

import CustomInput from "./CustomInput";
import { Formik, useFormikContext } from "formik";


const UserAndPassInfo = () => {
  const { values, handleChange,handleBlur,errors,touched } = useFormikContext();


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
          helperText={errors.userName && touched.userName && <Text style={styles.error}>{errors.userName}</Text> }
          onBlur={handleBlur("userName")}
          icon="user"
        />
        <CustomInput
          placeholder={"Contraseña"}
          onChangeText={handleChange("password")}
          name="password"
          value={values.password}
          helperText={errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text> }
          onBlur={handleBlur("password")}
          icon="lock"
        />
        <CustomInput
          placeholder={"Confirmar Contraseña"}
          onChangeText={handleChange("confirmPassword")}
          name="confirmPassword"
          value={values.confirmPassword}
          helperText={errors.confirmPassword && touched.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text> }
          onBlur={handleBlur("confirmPassword")}
          icon="lock"
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

export default UserAndPassInfo;
