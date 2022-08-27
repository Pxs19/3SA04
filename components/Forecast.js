import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

export default function Forecast(props) {
    return (
        <View style = {styles.container}>
            
            <Text style = {styles.textforMain}>{props.main}</Text>

            

            <View>
                <Image style={{width:100,height:100}} source={{uri: 'http://openweathermap.org/img/wn/'+props.icon+'@2x.png'}}/>
            </View>

            <View style = {styles.container}>
                <Text style = {styles.textStyle}>{props.description}</Text>
            </View>

            <View style = {styles.container}>
                <Text style = {styles.textNUM} > Temp: {props.temp} °C</Text>
            </View>

            <View style = {styles.container}>
                <Text style = {styles.textNUM} >Humidity: {props.humidity} %</Text>
            </View>

            

            <View style = {styles.container}>
                <Text style = {styles.textNUM} >pressure: {props.pressure} hPa</Text>
            </View>

        </View >
    );
} 

const styles = StyleSheet.create({

    container: {

        // justifyContent: 'space-evenly',
        // backgroundColor: 'black',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight

    },

    textStyle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },

    textforMain: {
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },

    textNUM: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'

    }


}); 