// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Weather from './components/Weather';
// import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();


export default function App() {
  const doIt = () => {
    console.log("Hello from console")
  }
  return (
    // <View style={styles.container}>
    //   <Weather zipCode = "90110"/>
    //   <StatusBar style="auto" />
    // </View>


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//   },
// });
