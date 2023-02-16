
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import color from '../config/color'

import Screen from './Screen'

function FoodList({onPress}){
    return (
      <Screen style={{marginTop:"3%"}}>
      <View style={{flex:1}}>
        <ImageBackground
          source={require('../assests/chicken.png')}
          style={styles.image}        
        >
        <Text style={styles.OfferText}>Get Special</Text>
        <Text style={styles.OfferText1}>Discount</Text>
        <TouchableOpacity style={styles.Btn_Container} onPress={onPress}>
          <Text style={styles.Btn_Text}>Order now</Text>   
      </TouchableOpacity>
        </ImageBackground>
        </View>
      </Screen>
  )
}

const styles = StyleSheet.create({
    Btn_Container:{
        marginLeft:20,
        width:150,
        
        height:40,
        margin:20,
        borderRadius:10,
        backgroundColor:"#C63131"
      },
      Btn_Text:{
        textAlign:"center",
        marginVertical:"4%",
        color:"#FFF",
        fontWeight:'bold',
        fontSize:17,
      },
    image:{
        width:"99%",
        height:180,
        overflow:'hidden',
        alignSelf:'center',
        borderRadius:30,
      },
      OfferText:{
        color:color.white,
        paddingTop:15,
        paddingLeft:20,
        fontSize:30,
        fontWeight:'800',
      },
      OfferText1:{
        color:color.white,
        paddingLeft:20,
        fontSize:30,
        fontWeight:'bold',
      },
}) 
export default FoodList;