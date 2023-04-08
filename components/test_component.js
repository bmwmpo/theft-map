import { Component } from "react";
import{StyleSheet, View, Text, Button} from "react-native";


const TestComponent =()=>{

    return(
        <View style={styles1.container}>
    <Text >test_component</Text>
    
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
    }

})

export default TestComponent;
