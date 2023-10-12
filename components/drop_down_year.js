import { Component, useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, TextInput, Button, Dimensions, Image, Pressable } from "react-native";
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import useStore from "../zustand/store.js";

const Drop_Down_Year = (prop) => {

    //for drop down
    const [items, setItems] = useState([
        { label: '2021', value: '2021' },
        { label: '2022', value: '2022' }
    ]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('2021');

    const { pick_year, setPickYear } = useStore((state) => state);

    useEffect(()=>{setPickYear(value)},[value])

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
    )
}


const style_bar = StyleSheet.create({
    container: {
        flexDirection: "row",
        //    backgroundColor: 'grey', 
        borderColor: 'blue',
        borderWidth: 5,
        borderStyle: 'solid',
        alignSelf: "flex-start",
        height: '6%'
    },
    bar: {
        flex: 0.8,
        alignSelf: "flex-start",
        borderColor: 'yellow',
        borderWidth: 2,
        borderStyle: 'solid',
        height: '100%',
        borderRadius: 15,
        shadowColor: '#aeafb0'
    },
    textspacer: {
        flex: 0.2,
        borderColor: 'purple',
        borderWidth: 5,
        borderStyle: 'solid',
    },
    menu_button: {
        width: '100%',
        height: '100%',
        resizeMode: "contain",
        // borderColor:'pink',
        // borderWidth: 5,
        // borderStyle:'solid',
    },
})

export default Drop_Down_Year