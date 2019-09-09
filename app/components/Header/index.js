import React from 'react';
import { View, Grid, Col, Row, Icon } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Grid>
                    <Row style={styles.textCenter}>
                        <Text>Khoản tiết kiệm của bạn</Text>
                    </Row>
                    <Row style={styles.textCenter}>
                        <Text style={styles.savedMoney} >165.245.000 VND</Text>
                    </Row>
                </Grid>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: 120,
        backgroundColor: 'orange',
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#C0C0C0',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    textCenter: {
        alignContent: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    savedMoney: {
        fontWeight: 'bold',
        fontSize: 18
    }
});
