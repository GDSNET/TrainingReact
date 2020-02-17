import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native-web'
import { Component } from "react";




export default class ComponenteDerecho extends Component {
  render(){

    const {especie,temperatura} = this.props


  return (
<View style={styles.container}>

<View style={styles.fila}>

<Text>{especie}</Text>


</View>
<View style={styles.fila}>

<Text>{temperatura}</Text>

</View>
  

</View>
  );
}
}





const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ddd',
    flexDirection: 'row',
    padding: 5,
  },
  fila: {
    flex:1,
    backgroundColor:'#ccc',
    flexDirection: 'row',
    padding: 20,
  }
});

