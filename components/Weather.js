import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';


export default function Weather(props) {



    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=414dcf790bc29c3207a05f7c93f02d6d`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        humidity: json.main.humidity,
                        icon: json.weather[0].icon
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });

        }

    }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        humidity: 0,



    });

    return (

        <ImageBackground source={require("../bg1.jpg")} style={styles.backdrop}>

            <View style={styles.highlight}>
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