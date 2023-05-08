import { Component, useEffect,useState, useRef } from "react";
import{StyleSheet, View, Text, TextInput, Button, Dimensions, Image, Pressable} from "react-native";
import React from 'react';








const Search_Bar =(prop)=>{
    return(
    <View style={style_bar.container}>
        <View style={{flex:0.1,        borderColor:'green',
        borderWidth: 5,
        borderStyle:'solid',}}>
              <Pressable style={{ color:'white'}}>
            
            <Image style = {style_bar.menu_button} 
            source={
              require('../assets/bar_menu_button.png')
            }/>
        </Pressable>
        </View>
      
        <TextInput style={style_bar.bar} placeholder="Here"></TextInput>
        <Text style={style_bar.textspacer}>HI</Text>
    </View>       

    )
}


const style_bar = StyleSheet.create({
    container:{
        flexDirection:"row",
    //    backgroundColor: 'grey', 
        borderColor:'blue',
        borderWidth: 5,
        borderStyle:'solid',
        alignSelf:"flex-start",
        height:'6%'
    },
    bar:{
        flex:0.8,
        alignSelf:"flex-start",
        borderColor:'yellow',
        borderWidth: 2,
        borderStyle:'solid',
        height:'100%',
        borderRadius:15,
        shadowColor:'#aeafb0'
    },
    textspacer:{
        flex:0.2,
        borderColor:'purple',
        borderWidth: 5,
        borderStyle:'solid',
    },
    menu_button:{
        width:'100%',
        height:'100%',
        resizeMode:"contain",
        // borderColor:'pink',
        // borderWidth: 5,
        // borderStyle:'solid',
    },
})

export default Search_Bar