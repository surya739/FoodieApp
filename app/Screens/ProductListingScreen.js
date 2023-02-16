import { Navigation } from '@mui/icons-material';
import React, { Component } from 'react'
import { StyleSheet, LogBox, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FoodProduct from '../components/FoodProduct';
import Screen from '../components/Screen'
import VarietyProduct from '../components/VarietyProducts';
import color from '../config/color';

LogBox.ignoreAllLogs();

const Variety=[
    {
    id:1,
    name:'Burger',
    source:require('../assests/Burgerr.jpg'),
    
},
{
    id:2,
    name:'Parotta',
    source:require('../assests/Parotta.jpg'),
    
},
{
    id:3,
    name:'Biryani',
    source:require('../assests/Biryani.jpg'),
    
},
{
    id:4,
    name:'Fish',
    source:require('../assests/fish.png'),

},
]



const ProductItem =[
  {
    id:1,
    FoodName: "Shawarma",
    Variety: "Non-Veg",
    Rate:"80",
    source:require('../assests/shawarma.png'),

  },
  {
    id:2,
    FoodName: "Cheese Pizza",
    Variety: "Veg",
    Rate:"260",
    source:require('../assests/Pizza.png'),

  },
  {
    id:3,
    FoodName: "Burger",
    Variety: "Non Veg",
    Rate:"180",
    source:require('../assests/Burger.png'),

    },
    {
      id:4,
      FoodName: "Grilled Chicken",
      Variety: "Non-Veg",
      Rate:"180",
      source:require('../assests/images1.png'),
  
    },
    {
      id:5,
      FoodName: "Dosa",
      Variety: "Veg",
      Rate:"40",
      source:require('../assests/images4.png'),
  
    },
    {
      id:6,
      FoodName: "Butter-Naan",
      Variety: "Veg",
      Rate:"70",
      source:require('../assests/images2.png'),
  
      },
]



const ProductItem1 =[
  {
    id:1,
    FoodName: "Biryani",
    Variety: "Non-Veg",
    Rate:"200",
    source:require('../assests/images3.png'),

  },
  {
    id:2,
    FoodName: "Bucket-Biryani",
    Variety: "Non-Veg",
    Rate:"900",
    source:require('../assests/images6.png'),

  },
  {
    id:3,
    FoodName: "Parotta",
    Variety: "Non Veg",
    Rate:"25",
    source:require('../assests/images5.png'),

    },
    {
      id:4,
      FoodName: "Fish",
      Variety: "Non-Veg",
      Rate:"200",
      source:require('../assests/fish.png'),
  
    },
    {
      id:5,
      FoodName: "Chicken Rice",
      Variety: "Non-Veg",
      Rate:"100",
      source:require('../assests/rice.png'),
  
    },
    {
      id:6,
      FoodName: "Parotta",
      Variety: "Non Veg",
      Rate:"25",
      source:require('../assests/Parotta.jpg'),
  
      },
]


function ProductListingScreen({ navigation }) {
    return (
      <Screen style={{margin:5}}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={{
            flexDirection:'row',
            padding:9,
        }}>
            <TouchableOpacity onPress={()=> navigation.goBack() }>
            <MaterialIcons  name="arrow-back-ios" size={25} color={color.ButtonColor}/>
            </TouchableOpacity>
            <Text style={styles.HeaderAlignment}>Choose Catagory</Text>
        </View>
        <ScrollView nestedScrollEnabled={true} style={{flexDirection:'row'}} horizontal={true}>
        <VarietyProduct 
        styleText={{color:color.white}}
        style={{backgroundColor:color.ButtonColor}} 
        name="Pizza" 
        source={require('../assests/pizza_food.png')}/>
        <FlatList 
            scrollEnabled={false} 
            horizontal
            data={Variety}
            pagingEnabled={true}
            keyExtractor={product => product.id.toString()}
            renderItem={({item}) =>
                <VarietyProduct 
                    source={item.source}
                    name = {item.name}
                    style={item.style}
                />
            }
        />
        </ScrollView>

        <View style={{flexDirection:"row"}}>
          <FlatList
            scrollEnabled={false} 
            data = {ProductItem}
            keyExtractor = {product => product.id.toString()}
            renderItem ={({item}) =>
            
              <FoodProduct

                FoodName={item.FoodName}
                Rate={item.Rate}
                Variety={item.Variety}
                source = {item.source}
              />
            } 
          />

        <FlatList
            scrollEnabled={false} 
            data = {ProductItem1}
            keyExtractor = {product => product.id.toString()}
            renderItem ={({item}) =>
            
              <FoodProduct

                FoodName={item.FoodName}
                Rate={item.Rate}
                Variety={item.Variety}
                source = {item.source}
              />
            } 
          />
      </View>
</ScrollView>

      </Screen>
    )
  }

const styles=StyleSheet.create({
    HeaderAlignment:{
        color:color.black,
        paddingLeft:"20%",
        fontSize:19,
        fontWeight:"bold"
    },
    VarietyList:{
        width:150,
        height:70,
        backgroundColor:color.ButtonColor,
        borderRadius:40,
        flexDirection:'row',
    },
    VarietyListText:{
        textAlignVertical:'center',
        fontSize:18,
        fontWeight:'bold',
        paddingLeft:"10%"
    },
})
export default ProductListingScreen;
