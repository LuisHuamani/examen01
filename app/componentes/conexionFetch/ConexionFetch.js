import React, {Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

function Item({title,image}) {
    return (
        <View style={styles.item}>
            <Image source={{uri:image}} style={{ width: 70, height: 70, borderRadius:50}} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default class ConexionFetch extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }
    async componentDidMount() {
        await fetch('https://yts.mx/api/v2/list_movies.json')
        .then(res => res.json())
        .then(
            result => {
                console.warn('result', result.data.movies);
                this.setState({
                    items:result.data.movies,
                });
            },
            error => {
                this.setState({
                    error: error,
                });
            },
        );
    }
    FlatListSeparador=()=>{
        return (
            <View 
                style={{height:1,width:'100%',backgroundColor:'black'}}
            />
        )
    }
    render() {
        const {navigate} = this.props.navigation;
        
        

        return (

            <View style={styles.container}>
                <FlatList
                    data={this.state.items.length > 0 ? this.state.items:[]}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity onPress={() => navigate('Detalles', {itemObject: item})}>
                                <Item
                                    title={item.title}
                                    image={item.small_cover_image} 
                                    navigation={this.props.navigation}
                                />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id}
                    navigation={this.props.navigation}
                    ItemSeparatorComponent = {this.FlatListSeparador}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'coral',
        flex: 1,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 20,
    },
    title: {
        fontSize: 25,
        marginLeft:20,
    },
});
