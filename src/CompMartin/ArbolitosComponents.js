import React from 'react';
import {Text, View, StyleSheet} from 'react-native-web'
import { Component } from "react";



class Main extends Component {

  


  render(){

    const {especie, temperaturaIdeal, riego, i, estado} = this.props;

  return (

 <View key={i} style={styles.container}>
      <Text key={'Estado' + i} style={styles.styleEspecie}>Estado: {estado}</Text>
     <Text key={'especie' + i} style={styles.styleEspecie}>Especie: {especie}</Text>
     <Text key={'temp' + i} style={styles.styleTemp}>Temp: {temperaturaIdeal}</Text>
     <Text key={'riego' + i} style={styles.styleRiego}>Riego: {riego}</Text>

 </View>
          
          

    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  styleEspecie: {
    backgroundColor:'#ddd',
    padding: 5
  },
  styleRiego: {
    backgroundColor:'#bbb',
    padding: 5
  },
  styleTemp: {
    backgroundColor:'#999',
    padding: 5
  },
 
});