import React, { useState } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';


export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0



    });

    return (



        <ImageBackground source={require("../bg1.jpg")} style={styles.backdrop}>

            <View style = {styles.highlight}>
                <Text style={styles.textStyle}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </View>





        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },

    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '35%',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight

    },

    textStyle: {
        fontSize: 20,
         color: 'white',
         textAlign: 'center'
     },


});