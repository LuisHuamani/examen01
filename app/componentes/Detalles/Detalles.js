import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

export default class Detalles extends Component {
    render() {
        const {params} = this.props.route;
        return ( 
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Image source={{uri:params.itemObject.small_cover_image}} style={{height: 70, width: 70}} />
                        <Text style={styles.title}>{params.itemObject.title}</Text>
                        <Text style={styles.summary}>{params.itemObject.summary}</Text>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'coral',
        height:'100%'
    },
    item: {
        borderRadius:55,
        backgroundColor: '#AFAFAF',
        padding: 20,
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    summary: {
        fontSize: 20,
    },
});