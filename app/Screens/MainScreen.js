import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'

import Screen from '../components/Screen'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../config/color';
import FoodList from '../components/FoodList';
import ItemsHeading from '../components/ItemsHeading';
import FoodItemList from '../components/FoodItemList';
import FoodProduct from '../components/FoodProduct';


function MainScreen({navigation}) {
  const SpecificFood =[
    {
    id : 1,
    name : "Chicken",
    source : require('../assests/Chicken.png')
  },
  {
    id : 2,
    name : "Biryani",
    source : require('../assests/Biryani.jpg')
  },
  {
    id : 3,
    name : "Burger",
    source : require('../assests/Burgerr.jpg')
  },
  {
    id : 4,
    name : "Pizza",
    source : require('../assests/pizza_food.png')
  },
  {
    id : 5,
    name : "Vegitarian",
    source : require('../assests/images_food.png')
  },
  {
    id : 6,
    name : "Parotta",
    source : require('../assests/aaluparotta.jpg')
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
  return (
    <Screen style={{paddingHorizontal:5,  backgroundColor: '#FFFFFF'}}>
    <ScrollView nestedScrollEnabled={true} style={{MarginTop:10,marginBottom:30}}>
        <View style={styles.RowContainer}>
        
          <Icon name="menu" size = {25} color="#000"/>                        
          <Text style={styles.HeadingText}>Foo<Text style={{color:color.ButtonColor}}>Die</Text></Text>
          <MaterialCommunityIcons name="bell" size = {25} color={color.ButtonColor}/>          
      
      </View>
      <View style={styles.SideHeading}>
        <View>
        <Text style={styles.SideHeadingText}>Lets Find</Text>
        <Text style={styles.SideHeadingText1}>Fress food</Text>
        </View>
    
        <Icon style={{
          marginTop:"3%",
          marginRight:"1%",
        }}  name="search" size = {30} color="#E43C38"/>                        
        
      </View>
      <FoodList onPress={() => navigation.navigate("ProductListingScreen")}/>

      <ItemsHeading HeadingText="Special Menu" SideHeadingText="View All"/>
      <ScrollView horizontal={true}>
      <FlatList
          scrollEnabled={false} 
          horizontal
          pagingEnabled={true}
          data = {SpecificFood}
          keyExtractor = {Product => Product.id.toString()}
          renderItem={({item}) =>
          <FoodItemList
            source={item.source}
            name = {item.name}
          />
          }
        />
       </ScrollView>

      <ItemsHeading HeadingText="Popular Food" SideHeadingText="See More"/>
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
const styles = StyleSheet.create({
 
  HeadingText:{
    fontWeight:'bold',
    color:color.black,
    fontSize:23          

  },
  RowContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop:5,

  },
  SideHeading:{
    flexDirection:'row',
    marginTop:15,
    justifyContent: 'space-between'
  },
  SideHeadingText:{
    fontSize:26,
    color:color.ButtonColor,
    fontWeight:"bold",
  },
  SideHeadingText1:{
    fontSize:25,
    color:color.black,
    fontWeight:"500",
  },
})
export default MainScreen;

