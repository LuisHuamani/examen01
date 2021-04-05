import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList, 
  Text, 
  View, 
  Image,
  TouchableOpacity} from 'react-native';
import AgeValidator from './app/componentes/ageValidator/AgeValidator';
import MyList from './app/componentes/myList/MyList';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.text}>
          <Text> Ingrese su edad </Text>
        </View>

        <AgeValidator/>

        <MyList/>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'coral',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 5,
  },
});