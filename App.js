import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  Image} from 'react-native';
import AgeValidator from './app/componentes/ageValidator/AgeValidator';
import myList from './app/componentes/myList/myList';

const lista = [
  {
    id: 1,
    img: 'Arequipa',
    descripcion: '',
  },
  {
    id: 2,
    img: 'Arequipa',
    descripcion: '',
  },
  {
    id: 3,
    img: 'Arequipa',
    descripcion: '',
  },
];

export default class App extends Component{
  

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.text}>
          <Text> Ingrese su edad </Text>
        </View>

        <AgeValidator/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 5,
  },
});