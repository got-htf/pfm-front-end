import React from 'react';
import { StyleSheet, ScrollView, View, Text, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class HomeScrollView extends React.Component {
    render() {
        return (
            <ScrollView style={this.props.style} horizontal showsHorizontalScrollIndicator={false}>
                {this.props.items && this.props.items.map(item => (
                    <View style={styles.itemContainer}>
                        <View style={styles.imageContainer}>
                            <ImageBackground
                                source={item.image}
                                style={styles.imageBackground}>
                            </ImageBackground>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Text style={[styles.text, styles.textCenter]}>{item.content}</Text>
                            <TouchableOpacity style={styles.button}>
                            <Text style={[styles.textCenter, styles.buttonText]}>Tạọ ví</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 200,
        borderRadius: 10,
        marginLeft: 5,
        backgroundColor: '#FFF',
        alignContent: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
      height: 100,
    },
    imageBackground: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        width: '100%', 
        height: '100%',
        overflow: "hidden",
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        marginTop: 5
    },
    textCenter: {
        textAlign: 'center',
    },
    button: {
        borderColor: 'orange',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 50,
        height: 40,
        width: 160,
        marginVertical: 7,
        paddingVertical: 8,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center'
        
    },
    buttonContainer: {
        paddingLeft: 20,
        paddingRight: 20
    },
    buttonText: {
        color: 'orange'
    }
});