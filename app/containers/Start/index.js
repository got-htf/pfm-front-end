import React from 'react';
import { ImageBackground } from 'react-native';
import { Container, Text, View} from 'native-base';
import Slider from '../../components/Slider';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Start extends React.Component {

    navigateToLogin() {
        this.props.navigation.navigate('Login');
    }

    render() {
        let sliderItems = [
            {
                id: 1,
                text: 'Balance your financial all the time',
                smallText: 'Let\'s make money and let us take care of the rest for you'
            },
            {
                id: 2,
                text: 'Get to know where your money is going',
                smallText: 'Categorizing your entries and following where each cent is going'
            },
            {
                id: 3,
                text: 'Never foget to pay any bill',
                smallText: 'Get notifications whenever you want'
            },
        ];
        return (
            <Container style={style.container}>
                <ImageBackground
                    source={require('../../resources/images/bg6.jpg')}
                    style={{ width: '100%', height: '100%' }}>
                    <Slider style={style.slider} items={sliderItems} />
                    <View style={style.btnContainer}>
                        <TouchableOpacity style={style.button} onPress={() => this.navigateToLogin()}>
                            <Text style={style.buttonText}>Start PFM now</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    slider: {
        padding: 50,
        marginTop: 50
    },
    button: {
        width: 300,
        backgroundColor: "orange",
        borderRadius: 5,
        marginVertical: 10,
        paddingVertical: 15
    },

    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center"
    },
});