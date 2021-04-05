import React, {Component}from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default class App extends Component{
    constructor(props) {
        super(props)
        this.state = {
          lista:[
            { 
              nombre: 'Meepolas de las Casas',
              img: 'https://files.libero.pe/Libero/2020/06/14/meepolas-de-las-casas-1592096443.png'
            },
            { 
              nombre: 'Lycan y la sociedad privada',
              img: 'https://prod.media.libero.pe/342x192/libero/imagen/2019/12/24/noticia-1577217638-lycan-y-la-sociedad-privada.jpg'
            },
            { 
              nombre: 'Timber Aguilar',
              img: 'https://files.libero.pe/Libero/2019/12/24/timber-aguilar-1577214809.jpg'
            },
            { 
              nombre: 'Roshangela Ezpinoza',
              img: 'https://files.libero.pe/Libero/2019/12/24/roshangela-espinoza-1577214753.jpg'
            },         
            { 
              nombre: 'Mayra Kotor',
              img: 'https://files.libero.pe/Libero/2020/06/14/103578871-3792934087443309-5557410375062175854-n-1592096273.png'
            },
            { 
              nombre: 'Doom Ramon',
              img: 'https://prod.media.libero.pe/342x192/libero/imagen/2019/12/24/noticia-1577217638-doom-ramon-2.jpg'
            },
            { 
              nombre: 'Wraith King & Ken-Y',
              img: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/bd/bd846f291a9a4208e3c2bf218603cb25bccc07e3_full.jpg'
            },                   
          ]
        }
      }
      
      renderItem = ({item}) => (
        <TouchableOpacity>
          <View style={styles.itemContainer}>
          <Image
            style={{ width: 100, height: 100, borderRadius:50}}
            source={{ uri: item.img }}
          />    
            <Text style={styles.itemName}>{item.nombre}</Text>
          </View>
        </TouchableOpacity>
      )
    
      keyExtractor = (item,index) => index.toString()

      FlatListSeparador = () => {
          return (
            <View
                style={{height:1, width:'100%', backgroundColor:'black'}}
            />
          )     
      }
      
      render(){
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.lista}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent = {this.FlatListSeparador}
                />
            </View>
        )        
      }   
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop:20,
    },
    itemContainer:{
        flex: 1,
        flexDirection: 'row',
        marginLeft:20,
        justifyContent: 'flex-start',
        margin:15,
    },
    itemName:{
        marginLeft:20,
        fontSize:20,
    }
  });
