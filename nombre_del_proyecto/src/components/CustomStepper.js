import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

const search = (keyName, myArray) => {
  let value = false;
  myArray.map((val) => {
    if (val === keyName) {
      value = true;
    }
  });
  return value;
};

const CustomStepper = (props) => {
  const {
    active,
    content,
    onBack,
    onNext,
    onFinish,
    wrapperStyle,
    stepStyle,
    stepTextStyle,
    buttonStyle,
    buttonTextStyle,
    showButton = true,
  } = props;
  const [step, setStep] = useState([0]);
  const pushData = (val) => {
    setStep((prev) => [...prev, val]);
  };

  const removeData = () => {
    setStep((prev) => {
      prev.pop();
      return prev;
    });
  };
  return (
    <View style={wrapperStyle}>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {content.map((_, i) => {
            return (
              <React.Fragment key={i}>
                {i !== 0 && (
                  <View
                    style={{
                      flex: 1,
                      height: 1,
                      backgroundColor: "grey",
                      opacity: 1,
                      marginHorizontal: 10,
                    }}
                  />
                )}

                {/* apertura de step */}

                <View
                  style={[
                    {
                      backgroundColor: "#1976d2",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: search(i, step) ? 1 : 0.3,
                    },
                    stepStyle,
                  ]}
                >
                  {search(i, step) ? (
                    <Text
                      style={[
                        {
                          color: "white",
                        },
                        stepTextStyle,
                      ]}
                    >
                      &#10003;
                    </Text>
                  ) : (
                    <Text
                      style={[
                        {
                          color: "white",
                        },
                        stepTextStyle,
                      ]}
                    >
                      {i + 1}
                    </Text>
                  )}
                </View>

                {/* cierre de step */}
              </React.Fragment>
            );
          })}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {content[active]}
        </ScrollView>
      </View>

      {showButton && (
        <View
          style={{
            flexDirection: "row",
            marginLeft: 60,
          }}
        >
          {active !== 0 && (
            <TouchableOpacity
              style={[
                {
                  padding: 10,
                  borderRadius: 4,
                  alignSelf: "flex-start",
                  marginRight: 10,
                },
                buttonStyle,
                {
                  backgroundColor: "#a1a1a1",
                },
              ]}
              onPress={() => {
                removeData();
                onBack();
              }}
            >
              <Text style={[{ color: "white" }, buttonTextStyle]}>Volver</Text>
            </TouchableOpacity>
          )}
          {content.length - 1 !== active && (
            <TouchableOpacity
              style={[
                {
                  padding: 10,
                  borderRadius: 4,
                  backgroundColor: "#1976d2",
                  alignSelf: "flex-start",
                  marginRight: 10,
                },
                buttonStyle,
              ]}
              onPress={() => {
                pushData(active + 1);
                onNext();
              }}
            >
              <Text style={[{ color: "white" }, buttonTextStyle]}>
                Continuar
              </Text>
            </TouchableOpacity>
          )}
          {content.length - 1 === active && (
            <TouchableOpacity
              style={[
                {
                  padding: 10,
                  borderRadius: 4,
                  backgroundColor: "#1976d2",
                  alignSelf: "flex-start",
                },
                buttonStyle,
              ]}
              onPress={() => onFinish()}
            >
              <Text style={[{ color: "white" }, buttonTextStyle]}>Finish</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default CustomStepper;
