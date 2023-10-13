import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import TestComponent from './components/map';
import Search_Bar from './components/search_bar';
import Drop_Down_Year from './components/drop_down_year'



export default function App() {
  return (
    <View style={{backgroundColor:'#aeafb0',height:Dimensions.get("screen").height}}>
          <View style={styles.container}>
      <StatusBar style="auto" />
          <Search_Bar/>
          <Drop_Down_Year/>
          <TestComponent/>
       
    </View>
    </View>




  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:'15%',
    height:'100%',
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
