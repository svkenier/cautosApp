import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

import CustomStepper from "./CustomStepper";

import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import UserAndPassInfo from "./UserAndPassInfo";

import { Formik } from "formik";
import { initialValues, validationSchema } from "../schemas/register";

const StepperForm = () => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((p) => p + 1);
  };
  const handleBack = () => {
    setActive((p) => p - 1);
  };
  const content = [
    <PersonalInfo title="Component 1" />,
    <AddressInfo title="Component 2" />,
    <UserAndPassInfo title="Component 3" />,
  ];

  // handle submit
  const handleSubmit = (values) => {
    console.log("fin de formulario");
    console.log("enviando formulario", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={{ marginVertical: 5, marginHorizontal: 20 }}>
          <CustomStepper
            active={active}
            content={content}
            showButton={true}
            onBack={handleBack}
            onNext={handleNext}
            buttonStyle={styles.button}
            buttonTextStyle={styles.Text}
            onFinish={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: 25,
  },
  Text: {
    color: "#1a2250",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default StepperForm;
