import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Forecast from './Forecast';
import Constants from 'expo-constants';


export default function Weather(props) {

    const [date, setDate] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval(() => {
            setDate(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(secTimer);
    }, []);



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
                        icon: json.weather[0].icon,
                        
                        pressure: json.main.pressure,
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
        icon: ' ',
        
        pressure: 0,




    });

    return (

        <ImageBackground source={require("../bg1.jpg")} style={styles.backdrop}>

            <View>
                <Text style={styles.textStyle}>Zip Code is {props.zipCode}</Text>
                <Text style={styles.textStyle}>{date}</Text>
            </View>

            <View style={styles.highlight}>
                
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center'
        

    },

    textStyle: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center'
    },


});