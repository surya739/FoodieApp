import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import color from '../config/color'
import Screen from './Screen'
function ItemsHeading({HeadingText, SideHeadingText}){
    return (
      <Screen>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.HeadingText}> {HeadingText} </Text>
                <Text style={styles.SideHeadingText}>{SideHeadingText} </Text>

            </View>
      </Screen>
    )
}
const styles = StyleSheet.create({
    HeadingText:{
        fontWeight:'bold',
        color:color.black,
        fontSize:20,
        marginVertical:20
    },
    SideHeadingText:{
        color:color.grey,
        fontSize:10,
        marginRight:5,
        marginTop:"7.5%",
    },
})
export default ItemsHeading;
