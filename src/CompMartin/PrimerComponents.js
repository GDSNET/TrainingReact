import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native-web'
import { Component } from "react";
import Data from '../APIS/ArbolesJSON.json'
import Arbolitos from './ArbolitosComponents'



export default class PrimerComponentsMartin extends Component {

  constructor(props) {
    super(props);
    this.state = { estado: null  };
   }

   componentDidMount(){
     this.funRecuperaDatos()
   }


async funGuardarDatos(){
    await this.setState({estado: 'denuevo'})
    await localStorage.setItem('misDatos', this.state.estado)
    

  }

  funRecuperaDatos(){
  
    const Respuesta  = localStorage.getItem('misDatos')
    this.setState({estado: Respuesta})
  }

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

      <Arbolitos 
      estado={this.state.estado}
      especie={fila.especie}
      temperaturaIdeal={fila.temperaturaIdeal}
      riego={fila.riego}
      i={i}
      />


     )
     })
 
   }


  render(){

  return (
  <View>
            <Text style={styles.container}>Martin Compornent</Text>
            

            {this.funMuestraDatos()}

            <TouchableOpacity onPress={()=>{this.funGuardarDatos()}}>
              <Text>Guardar Datos Locales</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{this.funRecuperaDatos()}}>
              <Text>Recuperar </Text>
            </TouchableOpacity>

 </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    color:'#BBB'
  }
});