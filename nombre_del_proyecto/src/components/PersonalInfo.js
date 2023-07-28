import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import CustomInput from "../components/CustomInput";
import { Formik, useFormikContext } from "formik";

const PersonalInfo = () => {
  const { values,errors,touched, handleChange,handleBlur } = useFormikContext();

  
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
          helperText={errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text> }
          onBlur={handleBlur("name")}
          icon="user"
          />
          

        <CustomInput
          placeholder={"Apellido"}
          onChangeText={handleChange("lastName")}
          name="lastName"
          value={values.lastName}
          helperText={errors.lastName && touched.lastName && <Text style={styles.error}>{errors.lastName}</Text> }
          onBlur={handleBlur("lastName")}
          icon="user"
        />

        <CustomInput
          placeholder={"Correo"}
          onChangeText={handleChange("email")}
          name="email"
          value={values.email}
          helperText={errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text> }
          onBlur={handleBlur("email")}
          icon="email"
        />
        <CustomInput
          placeholder={"Cedula"}
          name="cedula"
          onChangeText={handleChange("cedula")}
          value={values.cedula}
          helperText={errors.cedula && touched.cedula && <Text style={styles.error}>{errors.cedula}</Text> }
          onBlur={handleBlur("cedula")}
          icon="id"
        />
        <CustomInput
          placeholder={"Telefono"}
          onChangeText={handleChange("phone")}
          name="phone"
          value={values.phone}
          helperText={errors.cedula && touched.phone && <Text style={styles.error}>{errors.phone}</Text> }
          onBlur={handleBlur("phone")}
          icon="phone"
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
    gap:10,
    width: "95%",
    alignItems: "flex-end",
  },
  error:{
    color:"red",
    fontWeight:"bold",
    fontSize:10,
  },
});

export default PersonalInfo;
