import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import color from '../config/color';

function LoginScreen({navigation}) {
    return (
      <View style={{flex:1,backgroundColor:"#FAEDED"}}>
  
        <ImageBackground
          source={require('../assests/LoginPage.png')}
          style={styles.image}        
        >

      <Text style={styles.HeadingText}>Welcome</Text>
      <Text style={styles.ContentText}>Your Favrouite food delivered fast</Text>
      <Text style={styles.ContentText}>at your 
      <Text style=
      {{color:color.ButtonColor,fontWeight:"900"}}> Home</Text> </Text>
        </ImageBackground>
     
      <TouchableOpacity style={styles.Btn_Container} onPress={() =>
          navigation.navigate("MainScreen")
      }>
          <Text style={styles.Btn_Text}>Get Started</Text>   
      </TouchableOpacity>
      </View>
    )
  }

const styles = StyleSheet.create({
  Btn_Container:{
    alignSelf:'center',
    width:"90%",
    height:55,
    paddingHorizontal:8,
    position:'absolute',
    bottom:"2%",
    borderRadius:10,
    backgroundColor:color.ButtonColor
  },
  Btn_Text:{
    textAlign:"center",
    marginVertical:15,
    color:"#FFF",
    fontWeight:'bold',
    fontSize:17,
  },
  ContentText:{
    textAlign:"center",
   
    fontSize:15,
    color:"#FFF",
  },  
  HeadingText:{
    textAlign:"center",
    paddingTop:"145%",
    fontWeight:'bold',
    fontSize:40,
    color:color.ButtonColor,
  },  
  image:{
      width:"100%",
      height:"100%",
      alignSelf:'center',
      
    },

})
export default LoginScreen;