import React, { Component } from 'react'
import { Image, ImageBackground ,StyleSheet, Text } from 'react-native'
import color from '../config/color';
import Screen from './Screen';

function VarietyProduct({source, name, style, styleText}) {
    return (
      <Screen>
        <ImageBackground style={[styles.VarietyList, style]}>
            <Text style={[styles.VarietyListText,styleText]}>{name}</Text>
            <Image style={styles.Image} source={source}/>
        </ImageBackground>
      </Screen>
    )
  }

const styles=StyleSheet.create({
    Image:{
        width:"30%",
        height:"50%",
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:100,
        position:'absolute',
        right:10,
    },
    VarietyList:{
        width:150,
        height:60,
        backgroundColor:color.white ,
        borderRadius:40,
        flexDirection:'row',
        margin:10
    },
    VarietyListText:{
        textAlignVertical:'center',
        fontSize:18,
        fontWeight:'bold',
        paddingLeft:"10%",
        color:color.ButtonColor
    },
})
export default VarietyProduct;