import { Component, useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import React from 'react';
import MapView, { Marker, Polygon } from 'react-native-maps';
import useStore from "../zustand/store.js";
import Case from "../class/Case";
import { shallow } from 'zustand/shallow'




const TestComponent = (prop) => {

    const api_launch_flag = true

    const { case_list, setCaseList } = useStore((state) => state);
    const { pick_year, setPickYear } = useStore((state) => state);
    // const {fn,updateF} = useStore()
    // const count = useRef(0);
    // const [data,setdata] = React.useState([])
    const [eventID, setID] = React.useState(-1)
    const [eventCoord, setCoord] = React.useState({ latitude: 43.759, longitude: -79.571 })
    const [apiLink, setLink] = React.useState(`https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?resource_id=34e4206d-549e-4957-a0da-093d703a1c62&q=${pick_year}&limit=200`)
    const [CameraRegion, setCamera] = React.useState({
        latitude: 43.653225,
        longitude: -79.383186,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    generate_apiLink=(year)=>{
        return `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?resource_id=34e4206d-549e-4957-a0da-093d703a1c62&q=${year}&limit=200`
    }

    getApi = async () => {
        
        if(api_launch_flag ==true){
        
        return fetch(apiLink)
            // return fetch("https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?resource_id=34e4206d-549e-4957-a0da-093d703a1c62&q=2022&limit=200")
            // return fetch(`https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?resource_id=58b33705-45f0-4796-a1a7-5762cc152772&limit=1`)
            .then((response) => response.json())
            .then((json) => {
                console.log("start")
                console.log(apiLink)
                var temp_list = case_list
                
                console.log(case_list.length)

                //st
                console.log(999)
                console.log(temp_list[0].event_id)
                if (temp_list[0].event_id === "DEFAULT_ID") {
                    temp_list = []
                }
                // console.log(temp_list)
                if (json.result.records.length != 0) {
                    console.log("length" + json.result.records.length)
                    // console.log(json.result.records)  test
                    json.result.records.map((obj) =>
                        temp_list.push(new Case(...Object.values(obj)))
                        // console.log(Object.values(obj))
                    )
                    // console.log(temp_list)  

                    //merge temp list into store
                    setCaseList(temp_list)  //TODO : fix zustand  !!!!!

                    //update link
                    console.log(json.result._links.next)
                    setLink("https://ckan0.cf.opendata.inter.prod-toronto.ca/" + json.result._links.next)
                }

                //end
            })
            .catch((err) => {
                console.error(err)
            })
}
    }

    democ = () => {
        console.log(2)
    }

    //func that call api if link changed
    useEffect(() => { getApi() }, [apiLink])
    useEffect(()=>{
        setCaseList(case_list[0])
        console.log(case_list[0])
        console.log(case_list.length)
        console.log("bambambam")
        console.log("year changed")
        // setLink(`https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?resource_id=34e4206d-549e-4957-a0da-093d703a1c62&q=${pick_year}&limit=200`)
    },[pick_year])
    // useEffect(()=>{getApi()},[]) //map component
    useEffect(() => { democ() }, [])

    //[link]

    //marker ref
    const markRef = useRef(0)


    const Marker_list = case_list.map((ele, index) =>
        <Marker
        // ref = {markRef}
            coordinate={ele.geo}
            // title={ele.event_id} 
            title={ele.event_id + "_" + ele.id}
            description='bike theft'
            tracksViewChanges={false}
            tracksInfoWindowChanges={false}
            key={(ele.occ_year) + "_" + index}>
        </Marker>
    )


    //TODO : logic to show marker or not, ui to get more or less, customized marker (especially for stacked event)
    return (
        <View style={styles1.container}>
            <Text>{pick_year}</Text>
            <Text >test_component</Text>
            <Text>first item EVENT_UNIQUE_ID : {"\n"}{case_list.length}</Text>



            <MapView
                style={{ width: Dimensions.get('window').width, height: 500 }}
                provider="google"
                initialRegion={CameraRegion}
            //   ref={mapRef}
            >

                <Marker
                
                    coordinate={eventCoord}
                    title="event 1"
                    description='bike theft'></Marker>
                {Marker_list}

            </MapView>



        </View>
    )
}






const styles1 = StyleSheet.create({
    container: {
        //flex:1,
        // backgroundColor: 'grey', 
        borderColor: 'red',
        borderWidth: 5,
        borderStyle: 'solid'
    },
    map: {
        width: '50%',
        height: '50%',
    },

})

export default TestComponent;
