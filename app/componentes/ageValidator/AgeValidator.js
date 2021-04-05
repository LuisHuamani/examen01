import React, { Component } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class AgeValidator extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
          textValue: '',
        };
    }
    
    onChanged(text){
        let newText = '';
        let numbers = '0123456789';
    
        for (var i=0; i < text.length; i++) {
          if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
          }
          else {
            // your call back function
            alert("porfavor solo ingrese valores numericos");
          }
        }

        if(text >= 18){
            this.setState({textValue: 'Es mayor de edad'});
        } else {
            this.setState({textValue: 'Es menor de edad'});
        }
    };

    render() {
        return(
            <View style={styles.container}>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: '#FFA794'}}
                placeholder="Ingrese sus valores"
                keyboardType='numeric'
                onChangeText={text => this.onChanged(text)}
                />
                <Text>{this.state.textValue}</Text>
            </View>
        );
    }
}

    
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      paddingHorizontal: 10,
    },
});

export default AgeValidator;