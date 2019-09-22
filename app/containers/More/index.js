import React, { Component } from 'react';
import { 
    StyleSheet, Text, View, ScrollView, 
    ImageBackground, TouchableHighlight,TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Body, Right } from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';

class More extends Component {
  render() {
      return (
          <View style={styles.container}>
              {/* header */}
              <Header style={styles.header}>
                  <Left>
                      <Ionicons name='ios-qr-scanner' style={styles.iconBack} />
                  </Left>
                  <Right>
                      <View style={styles.viewHeaderRight}>
                          
                          <Ionicons name='ios-notifications-outline' style={styles.iconRight}></Ionicons>
                          <Icon style={styles.iconUser} name='user'></Icon>
                      </View>
                  </Right>
              </Header>
              {/* account balnace */}
              
              <View style={styles.viewBalance}>
                  <View style={styles.viewBal} >
                      <Text style={styles.textBlanceAmt}>1,000,000 VND</Text>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('MapWallet')}>
                          <AntDesign name='wallet' style={styles.iconWallet}></AntDesign>
                      </TouchableOpacity>
                  </View>

                  
                  <Text style={styles.textBlance}>
                      Balance
        </Text>
              </View>
              <View style={styles.viewInExpen}>
                  
                      <View style={styles.viewMenuInPen}>
                      <Ionicons name='ios-add-circle' style={styles.colorIncome}>
                          <Text style={styles.textTitleInsPense}> Incomes</Text>
                      </Ionicons> 
                      <Text style={styles.textTitleInsPense}>0.00 VND</Text>
                      </View>
                      
                  
                  
                  <View style={styles.viewMenuInPen}>
                      <Ionicons name='ios-remove-circle' style={styles.colorExpense}>
                          <Text style={styles.textTitleInsPense}> Expenese</Text>
                      </Ionicons>
                      <Text style={styles.textTitleInsPense}>0.00 VND</Text>
                  </View>
              </View>
              {/* content */}

              <View style={styles.viewContent}>
                  <View style={styles.viewUpcoming}>
                      <View style={styles.viewUpcomingDetail}>
                          <Ionicons style={styles.viewUpcomingIcon} name="ios-folder-open"></Ionicons>
                          <Text style={styles.viewUpcomingText}>2 upcoming transactions</Text>
                      </View>
                  </View>

                  <ScrollView horizontal={false}
                      pagingEnabled={true}
                      showsVerticalScrollIndicator={false}>
                      
                      <View style={styles.viewPackage} >
                          {/* title cua tung goi */}
                          <Text style={styles.viewPackageTitle} >
                              Standard of living
            {/* <Ionicons name='ios-information-circle-outline' style={styles.iconInfo} />  */}
                          </Text>
                          {/* view cac goi */}
                          <View>

                              <ScrollView horizontal={true}
                                  pagingEnabled={true}
                                  showsHorizontalScrollIndicator={false}>
                                  {/* <Image source={require('../../resources/assets/img-card-detail.png')}>
                
              </Image> */}

                                  {/* <Image source={require('../../resources/assets/muasam.jpg')}></Image> */}
                                  <TouchableOpacity onPress={() => this.props.navigation.navigate('AddPackage')}>
                                      <ImageBackground source={require('../../resources/assets/muasam.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                          <Ionicons name='ios-add' style={styles.iconAdd} />
                                          <Text style={styles.packageName}>Shopping</Text>
                                      </ImageBackground>
                                  </TouchableOpacity>
                                  <ImageBackground source={require('../../resources/assets/dulich.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Travel</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/car.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Car</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/food.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Food&Drink</Text>
                                  </ImageBackground>
                              </ScrollView>
                          </View>
                      </View>

                      {/* noi dung cua tung goi 2 */}
                      <View style={styles.viewPackage} >
                          {/* title cua tung goi */}
                          <Text style={styles.viewPackageTitle} >
                              Saving
            {/* <Ionicons name='ios-information-circle-outline' style={styles.iconInfo} />  */}
                          </Text>
                          {/* view cac goi */}
                          <View>

                              <ScrollView horizontal={true}
                                  pagingEnabled={true}
                                  showsHorizontalScrollIndicator={false}>
                                  {/* <Image source={require('../../resources/assets/img-card-detail.png')}>
                
              </Image> */}

                                  {/* <Image source={require('../../resources/assets/muasam.jpg')}></Image> */}
                                  <TouchableHighlight onPress={() => console.log("hehe")}>
                                      <ImageBackground source={require('../../resources/assets/muasam.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                          <Ionicons name='ios-add' style={styles.iconAdd} />
                                          <Text style={styles.packageName}>Shopping</Text>
                                      </ImageBackground>
                                  </TouchableHighlight>
                                  <ImageBackground source={require('../../resources/assets/dulich.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Travel</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/car.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Car</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/food.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Food&Drink</Text>
                                  </ImageBackground>
                              </ScrollView>
                          </View>
                      </View>
                     

                      {/* noi dung cua tung goi 3 */}
                      <View style={styles.viewPackage} >
                          {/* title cua tung goi */}
                          <Text style={styles.viewPackageTitle} >
                              Investment
            {/* <Ionicons name='ios-information-circle-outline' style={styles.iconInfo} />  */}
                          </Text>
                          {/* view cac goi */}
                          <View>

                              <ScrollView horizontal={true}
                                  pagingEnabled={true}
                                  showsHorizontalScrollIndicator={false}>
                                  {/* <Image source={require('../../resources/assets/img-card-detail.png')}>
                
              </Image> */}

                                  {/* <Image source={require('../../resources/assets/muasam.jpg')}></Image> */}
                                  <TouchableHighlight onPress={() => console.log("hehe")}>
                                      <ImageBackground source={require('../../resources/assets/muasam.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                          <Ionicons name='ios-add' style={styles.iconAdd} />
                                          <Text style={styles.packageName}>Shopping</Text>
                                      </ImageBackground>
                                  </TouchableHighlight>
                                  <ImageBackground source={require('../../resources/assets/dulich.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Travel</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/car.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Car</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/food.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Food&Drink</Text>
                                  </ImageBackground>
                              </ScrollView>
                          </View>
                      </View>

                      {/* noi dung cua tung goi 4 */}
                      <View style={styles.viewPackage} >
                          {/* title cua tung goi */}
                          <Text style={styles.viewPackageTitle} >
                              Education 
            {/* <Ionicons name='ios-information-circle-outline' style={styles.iconInfo} />  */}
                          </Text>
                          {/* view cac goi */}
                          <View>

                              <ScrollView horizontal={true}
                                  pagingEnabled={true}
                                  showsHorizontalScrollIndicator={false}>
                                  {/* <Image source={require('../../resources/assets/img-card-detail.png')}>
                
              </Image> */}

                                  {/* <Image source={require('../../resources/assets/muasam.jpg')}></Image> */}
                                  <TouchableHighlight onPress={() => console.log("hehe")}>
                                      <ImageBackground source={require('../../resources/assets/muasam.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                          <Ionicons name='ios-add' style={styles.iconAdd} />
                                          <Text style={styles.packageName}>Shopping</Text>
                                      </ImageBackground>
                                  </TouchableHighlight>
                                  <ImageBackground source={require('../../resources/assets/dulich.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Travel</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/car.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Car</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/food.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Food&Drink</Text>
                                  </ImageBackground>
                              </ScrollView>
                          </View>
                      </View>

                      {/* noi dung cua tung goi 5 */}
                      <View style={styles.viewPackage} >
                          {/* title cua tung goi */}
                          <Text style={styles.viewPackageTitle} >
                              Family Security 
            {/* <Ionicons name='ios-information-circle-outline' style={styles.iconInfo} />  */}
                          </Text>
                          {/* view cac goi */}
                          <View>

                              <ScrollView horizontal={true}
                                  pagingEnabled={true}
                                  showsHorizontalScrollIndicator={false}>
                                  {/* <Image source={require('../../resources/assets/img-card-detail.png')}>
                
              </Image> */}

                                  {/* <Image source={require('../../resources/assets/muasam.jpg')}></Image> */}
                                  <TouchableHighlight onPress={() => console.log("hehe")}>
                                      <ImageBackground source={require('../../resources/assets/muasam.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                          <Ionicons name='ios-add' style={styles.iconAdd} />
                                          <Text style={styles.packageName}>Shopping</Text>
                                      </ImageBackground>
                                  </TouchableHighlight>
                                  <ImageBackground source={require('../../resources/assets/dulich.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Travel</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/car.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Car</Text>
                                  </ImageBackground>
                                  <ImageBackground source={require('../../resources/assets/food.jpg')} style={styles.img} imageStyle={{ borderRadius: 25 }}>
                                      <Ionicons name='ios-add' style={styles.iconAdd} />
                                      <Text style={styles.packageName}>Food&Drink</Text>
                                  </ImageBackground>
                              </ScrollView>
                          </View>
                      </View>

                      
                  </ScrollView>
              </View>
              {/* Footer */}
              <View style={styles.footer_style}>
              <View style={[styles.viewMenuFooter]}>
                  <Ionicons name='ios-home' style={[styles.iconFooter, styles.active]} />
                  <Text style={[styles.textFooter, styles.active]}>Home</Text>
              </View>
              <View style={styles.viewMenuFooter}>
                  <MaterialCommunityIcons name='chart-line' style={styles.iconFooter} />
                  <Text style={styles.textFooter}>Cash Flow</Text>
              </View>
              <View style={styles.viewMenuFooter}>
                  <MaterialCommunityIcons name='monitor-dashboard' style={styles.iconFooter} />
                  <Text style={styles.textFooter}>PFM</Text>
              </View>
              <View style={styles.viewMenuFooter}>
                  <MaterialCommunityIcons name='bank-transfer' style={styles.iconFooter} />
                  <Text style={styles.textFooter}>Transfer</Text>
              </View>

              <View style={styles.viewMenuFooter}>
                  <Ionicons name='ios-more' style={styles.iconFooter} />
                  <Text style={styles.textFooter}>More</Text>
              </View>
          </View>
              

          </View>
      );
  }
}

export default connect(null, null)(More);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#459ce7',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
  header: {
      flex: 1,
      backgroundColor: '#009FDA',
      marginTop: 35
  },
  iconBack: {
      fontSize: 30,
      color: '#ffffff',
      alignItems: 'center',
      width: 50,

  },
  iconUser: {
      fontSize: 30,
      color: '#ffff',

  },
  iconRight: {
      fontSize: 30,
      color: '#ffff',

  },
  viewHeaderRight: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: 120
  },
  viewCash: {
      height: '15%',
      backgroundColor: '#ffff',
      borderColor: '#C9DD03',
      borderWidth: 3,
      borderRadius: 20,
      marginTop: 20,
      marginRight: 10,
      marginLeft: 10,
      flexDirection: "row",
      alignItems: "center",
      flexDirection:"row",
      justifyContent: "center"
  },
  viewBalance: {
      alignItems: "center",
      marginTop: 30,
      marginBottom:"2%"
  },
  textBlanceAmt: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "500"
  },
  textBlance: {
      color: "#fff",
      fontSize: 20,
  
  },
  cashRequest: {
      fontSize: 40,
      // paddingBottom: 5
  },
  viewCashRequest: {
      borderColor: "#C9DD03",
      borderBottomWidth: 3,
      width: 80,
      alignItems: "center",
      
  },
  viewControlBorderBottom: {
      alignItems: "center",
      width: 100,
      
  },
  imgAction: {
      width: 25,
      height: 20
  },
  viewContent: {
      backgroundColor: "#ffff",
      flex: 1,
      marginTop: 0
  },
  viewPackage: {

  },
  viewPackageTitle: {
      fontSize: 16,
      fontWeight: "500",
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,

  },
  img: {
      width: 120,
      height: 120,
      marginLeft: 10

  },
  iconAdd: {
      fontSize: 40,
      textAlign: "right",
      paddingRight: 10,
      color: "#ffff"
  },
  packageName: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "500",
      position: "absolute",
      alignSelf: 'center',
      bottom: '5%'
  },
  iconInfo: {
      fontWeight: "500",
      fontSize: 20,

  },
  footer_style: {
      width: '100%',
      height: 60,
      backgroundColor: '#fff',
      flexDirection: "row"
  },
  iconFooter: {
      fontSize: 20,
      color: "black"
  },
  textFooter: {
      color: "black",
      fontSize: 15
  },
  viewMenuFooter: {
      flex: 1,
      alignItems: "center",
      alignSelf: "center"
  },
  active: {
      color: '#459ce7'
  },
  viewInExpen:{
      backgroundColor:"#ffff",
      flexDirection:"row",
     
  },
  viewMenuInPen:{
      flex: 1,
      alignItems: "center",
      alignSelf: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#C9DD03",
      padding:5
  },
  textTitleInsPense:{
      fontSize: 20,
      justifyContent: 'space-between',
      color:"black"
  },
  colorIncome:{
      color: "green", fontSize: 25,
      justifyContent: 'space-between'
  },
  colorExpense:{
      color: "red", fontSize: 25,
  },
  viewBal:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
  },
  iconWallet:{
      fontSize:30,
      color:"#ffff",
      marginLeft:'10%'
  },
  viewMySaving:{
      flexDirection:"row",
      width:'100%',
      height:250,
     
      
  },
  viewMySavingItem:{
      width:"50%",
      backgroundColor:"#ffff",
      borderRadius:10,
      marginLeft:10,
      marginBottom:10,
      marginTop:10,
      borderColor:"#ddd",
      borderWidth:1
      
  },
  textSaving:{
      color: '#459ce7',
      paddingLeft:10,
      paddingTop:10,
      fontWeight:"500"
      
  },
  viewPercent:{
      position:"absolute",
      width:80,
      height:80,
      borderWidth:5,
      borderColor:"#ddd",
      bottom:"30%",
      left:"40%",
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center"
      
  },
  textPercent:{
     color:"black",
     fontWeight:"500"
  },
  textTitleMysaving:{
     
      marginLeft:10,
      marginTop:10,
      fontWeight:"500"
      
  },
  viewUpcoming:{
      width:'100%',
      height:50,
      backgroundColor:"#3CB371",
      color:"#fff"
  },
  viewUpcomingDetail:{
      flexDirection:"row",
      height:'100%',
      alignItems:"center",
      paddingLeft:20
      
  },
  viewUpcomingIcon:{
      color:"#fff",
      fontSize:30,
      
  },
  viewUpcomingText:{
      color:"#fff",
      fontSize:20,
      paddingLeft:10
  }


});
