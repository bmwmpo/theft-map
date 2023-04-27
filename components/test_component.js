import { Component, useEffect,useState, useRef } from "react";
import{StyleSheet, View, Text, Button, Dimensions} from "react-native";
import React from 'react';
import MapView,{ Marker }from 'react-native-maps';


const TestComponent =(prop)=>{

    const count = useRef(0);
    const [data,setdata] = React.useState([])
    const [apiFlag,setflag] = React.useState(false)
    const [eventID, setID] = React.useState(-1)
    const [eventCoord, setCoord] = React.useState({latitude: 43.759, longitude: -79.571})
    
getApi=()=>{

    return fetch('https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?resource_id=34e4206d-549e-4957-a0da-093d703a1c62&q=2022&limit=1')
    .then((response)=>response.json())
    .then((json)=>{
        setdata(json.result.records);
        console.log((json.result.records[0].EVENT_UNIQUE_ID))
        setID(json.result.records[0].EVENT_UNIQUE_ID)
        setflag(true)
        console.log(apiFlag)
        // console.log([0,1])
        // var g = {"a":1111}
        // console.log(g)
        // console.log(g["a"])
        // console.log(g.a)
        // var dict = JSON.parse(json.result.records[0].geometry)
        // console.log((dict))
        // console.log(JSON.stringify(dict.coordinates))

        setCoord({latitude:JSON.parse(json.result.records[0].geometry).coordinates[1],longitude:JSON.parse(json.result.records[0].geometry).coordinates[0]})
        
    })
    .catch((err)=>{
        console.error(err)
    })

}
 
useEffect(()=>{getApi()},[])
//TODO : logic to show marker or not, ui to get more or less, customized marker (especially for stacked event)
     return(
        <View style={styles1.container}>
    <Text >test_component</Text>
    <Text>first item EVENT_UNIQUE_ID : {"\n"}{eventID}</Text>
    


    <MapView
          style= {{width: Dimensions.get('window').width, height: 500}}
        //   initialRegion={currRegion}
        //   onRegionChangeComplete={mapMoved}
        //   ref={mapRef}
        >

            <Marker 
            coordinate={eventCoord} 
            title="event 1" 
            description='bike theft'></Marker>

        </MapView>



</View>
    )
}
   





const styles1 = StyleSheet.create({
    container:{
        //flex:1,
       // backgroundColor: 'grey', 
        borderColor:'red',
        borderWidth: 5,
        borderStyle:'solid'
    },
    map: {
        width: '50%',
        height: '50%',
      },

})

export default TestComponent;
