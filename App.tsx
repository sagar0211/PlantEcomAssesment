import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LandingScreen from './src/Screens/LandingScreen';
import {MainNavigation} from './src/MainNavigation';

const App = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // backgroundColor: '#000000',
    //   }}>
    //   <LandingScreen />
    // </View>
    <>
      <MainNavigation />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
