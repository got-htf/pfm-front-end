import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, KeyboardAvoidingView,TouchableOpacity, TextInput  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

export default class AddPackage extends Component{
    static navigationOptions = { header: null };
    state = {
        name: '',
        money: '',
    };
    render() {
        let data = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }];
        let { name } = this.state;
        let { money } = this.state;
        return (
           <View style={styles.container}>
               {/* view upload image */}
               <View style={styles.viewUploadImg}>
                    
                    
                    <View style={styles.viewIconBack}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Ionicons name='ios-arrow-round-back' style={styles.iconBack} />
                        </TouchableOpacity>
                        <Text style={styles.titleName}>Create Package</Text>
                    </View>
                    <Ionicons name='md-cloud-upload' style={styles.textUploadimg} />
                    
                    
               </View>
               {/* view input */}
                <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
               <View style={styles.viewContent} >
                    <View style={styles.viewInput}>
                        <TextInput style={styles.textBox}
                            placeholder='enter name'
                            value={name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <TextInput style={styles.textBox}
                            placeholder='enter money'
                            value={money}
                            onChangeText={(money) => this.setState({ money })}
                            
                    />
                        <Button title="Add"
                            color="#009FDA"
                            onPress={() => Alert.alert('Add successful ')}>

                        </Button>
                        
                    </View>
                </View>
                </KeyboardAvoidingView>
           </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    img: {
        width: '100%',
        height: 300,
    },
    textUploadimg:{
        color:"#ffffff",
        position: "absolute",
        alignSelf: 'center',
        bottom: '2%',
        fontSize: 46,
        fontWeight:"500"
    },
    viewContent:{
        backgroundColor:"#82E0AA",
        borderRadius:10,
        height: '60%',
        margin:20,
        shadowOpacity:1,
        shadowOffset: { width: 10, height: 10,}
    },
    textBox:{
        
        
    },
    viewInput:{
      padding:20
        
    },
    viewUploadImg:{
        width:'100%',
        height:'20%',
        backgroundColor:'#D0D0D0'
    },
    iconBack: {
        fontSize: 50,
        color: '#ffffff',
        alignItems: 'center',
        width: 50,
        marginLeft:10

    },
    titleName: {
        fontSize: 14,
        color: '#ffffff',
        alignItems: 'center',
        width: "auto",
        alignSelf:"center"

    },
    viewIconBack:{
        flexDirection :"row"
    }

})