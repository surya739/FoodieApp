import React, { Component } from 'react'


import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Screen from './Screen';
import color from '../config/color';

function FoodProduct({FoodName, Variety, Rate, source}) {
    return (
      <Screen style={{
        width:"100%",
        hiegth:300,
        marginTop:"5%",
        marginLeft:"1%"
      }}>
      
        <ImageBackground 
            source={source}
            style={styles.Image}
        >
            <Icon style={styles.IconAlignment} name="heart" size = {30} color={color.ButtonColor}/>                        
        
        </ImageBackground>
        <Text style={styles.NameOfProduct}>{FoodName}</Text>
        <View style={styles.RowAlignment}>
          <Text style={styles.ProductDetail}>{Variety}</Text>
          <MaterialIcons style={styles.StarAlignment} name="star" size = {15} color={color.ButtonColor}/>                        
          <MaterialIcons style={styles.StarAlignment} name="star" size = {15} color={color.ButtonColor}/>                        
          <MaterialIcons style={styles.StarAlignment} name="star" size = {15} color={color.ButtonColor}/>                        
          <MaterialIcons style={styles.StarAlignment} name="star-border" size = {15} color={color.ButtonColor}/>                        
          <MaterialIcons style={styles.StarAlignment} name="star-border" size = {15} color={color.ButtonColor}/>                        


        </View>
        <View style={styles.RowAlignment1}>
        <Text style={styles.RateDetails}>₹ {Rate}</Text>
        <MaterialIcons style={styles.StarAlignment} name="add-circle" size = {25} color={color.ButtonColor}/>                        


        </View>
      </Screen>
    )
}
const styles=StyleSheet.create({
  IconAlignment:{
    
    position:'absolute',
    right:"3%",
    top:1,
  },  
  Image:{
        width:"100%",
        height:150,
        borderRadius:10,
        overflow:'hidden',
    },
    NameOfProduct:{
      color:"#000",
      fontSize:18,
      fontWeight:'bold',
      padding:3,
    },
    ProductDetail:{
      color:color.grey,
      marginRight:2
    },
    RateDetails:{
      color:'#000',
      fontWeight:'500',
      fontSize:17,
      paddingTop:6,
      paddingLeft:3,

    },
    RowAlignment:{
      flexDirection:'row',
      paddingStart:3,
    },
    RowAlignment1:{
      
      flexDirection:'row',
      justifyContent:'space-between',
      paddingHorizontal:"2%"
    },
    StarAlignment:{
      paddingTop:6,
      paddingLeft:1
    },
})
export default FoodProduct;