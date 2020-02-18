import React from 'react';
import {Text, View, StyleSheet} from 'react-native-web'
import { Component } from "react";
import Data from '../APIS/ArbolesJSON.json'



export default class PrimerComponentsMartin extends Component {

  funMuestraDatos(){
   return Data.map((fila, i)=>{

    return(
      <View>
    <Text key={i} style={styles.container}>Supervisor: {fila.supervisor}</Text>
     {this.funMuestraArboles(fila.arboles)}
    </View>
    )
    })

  }

  funMuestraArboles(arbolitos){
    return arbolitos.map((fila, i)=>{
 
     return(
     <Text key={i} style={styles.container}>Arbol: {fila.especie}</Text>
     )
     })
 
   }


  render(){

  return (
  <View>
            <Text style={styles.container}>Martin Compornent</Text>
            

            {this.funMuestraDatos()}

 </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    color:'#BBB'
  }
});