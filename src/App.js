import React from 'react';
import {Text, View, StyleSheet} from 'react-native-web'
import { Component } from "react";
import CompMartin from './CompMartin/PrimerComponents'




class Main extends Component {



  render(){
  return (
      <View>
          
            <Text style={styles.container}>Hola Mundo</Text>
            <CompMartin />
          
          
          
    </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    color:'#567'
  }
});