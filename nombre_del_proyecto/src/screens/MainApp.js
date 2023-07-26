import React from 'react'
import SigninScreen from './SigninScreen'
import { StyleSheet, View } from 'react-native'
import RegisterScreen from './RegisterScreen'
import MapScreen from "./MapScreen";
import BrowserScreen from './BrowserScreen';


const MainApp = () => {

  return (
    <View style={styles.root}>

      {/* <BrowserScreen /> */}
      <MapScreen />
      {/* <SigninScreen/> */}
      {/* <RegisterScreen/> */}

    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default MainApp