import { Image } from '@mui/icons-material'
import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import color from '../config/color'

function FoodItemList({name,source}){
    return (
      <View>
        <ImageBackground
            source={source}
            style={styles.Image}
        >
            <Text style={styles.Heading}>{name}</Text>
        </ImageBackground>
      </View>
    )
    } 
const styles=StyleSheet.create({
    Image:{
        width:150,
        height:150,
        overflow:'hidden',
        borderRadius:30,
        marginLeft:10
    },
    Heading:{
        fontSize:20,
        fontWeight:"bold",
        color:color.white,
        textAlign:'center',
        justifyContent:'center',
        marginTop:"35%"
    },
})
export default FoodItemList;