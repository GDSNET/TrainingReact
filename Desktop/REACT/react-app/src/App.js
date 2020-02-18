import React from 'react';
import './App.css';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native-web'
import { Component } from "react";
import Datos from "./APIS/ArbolesJSON.json"
import ComponenteDerecho from './Components/ComponenteDerecho'


class Main extends Component {

funGuarda(){
localStorage.setItem('Arreglo',Datos);
localStorage.setItem('dos',"hola");
const obj = localStorage.getItem("Arreglo");

//alert(obj)

}


  
funEspecies(){
const data = Datos
try {
return data.map((value,i)=> {
  
    return value.arboles.map((subvalue,i)=>{
      if(subvalue.especie=='manzano')
      {subvalue.especie='BANANANANANANANNOONNN'}
        return(
              <View>
              <ComponenteDerecho 
               especie={subvalue.especie}
               temperatura={subvalue.temperaturaIdeal} />
              </View>
          )
        })
})
} catch (error) {
  alert(error)
}}


  render(){
  return (
      <View>
          <TouchableOpacity onPress={()=>this.funGuarda()} >
            <Text>Guardar data</Text>
          </TouchableOpacity>
          
          {this.funEspecies()}
    </View>
    );
  }
}

export default Main;

const styles1 = StyleSheet.create({
  container: {

    backgroundColor:'#e6ffe6'
  }
});