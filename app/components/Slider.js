import React from 'react';
import { View, Text, Grid, Row } from 'native-base';
import { StyleSheet } from 'react-native';
export default class Slider extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                    {this.props.items.map(item => (
                        <View style={style.itemContainer} key={item.id}>
                            <Text style={style.itemText}>{item.text}</Text>
                            <Text style={style.smallText}>{item.smallText}</Text>
                        </View>
                    ))}
            </View>
        )
    }
}

const style = StyleSheet.create({
    itemContainer: {
        marginTop: 50
    },
    itemText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    smallText: {
        fontSize: 12,
        color: 'white'
    }
});