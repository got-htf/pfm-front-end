import React from 'react';
import { StyleSheet } from 'react-native';
import Header from '../../components/Header';
import { Content, Container, Text, Grid, Row, Col, View } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScrollView from '../../components/HomeScrollView';

export default class Home extends React.Component {
  render() {

    const scrollListFixed = [
      {
        image: require('../../resources/images/bg1.jpg'),
        content: 'Ăn uống hàng ngày'
      },
      {
        image: require('../../resources/images/bg2.jpg'),
        content: 'Điện/Nước/Internet'
      },
      {
        image: require('../../resources/images/bg3.jpg'),
        content: 'Sở thích'
      },
      {
        image: require('../../resources/images/bg4.jpg'),
        content: 'Du lịch'
      },
    ];
    const scrollListLongterm = [
      {
        image: require('../../resources/images/bg5.jpg'),
        content: 'Học tập'
      },
      {
        image: require('../../resources/images/bg4.jpg'),
        content: 'Mua xe'
      },
      {
        image: require('../../resources/images/bg3.jpg'),
        content: 'Mua nhà'
      },
      {
        image: require('../../resources/images/bg2.jpg'),
        content: 'Đám cưới'
      },
    ];

    return (
      <Container>
        <Header />
        <Content style={styles.content}>
          <View>
            <Grid>
              <Row>
                <Col style={styles.iconWrapper} size={25}>
                  <Ionicons style={styles.bigIcon} size={60} color='green' name="ios-cash"/>
                </Col>
                <Col style={styles.iconWrapper} size={25}>
                  <Ionicons style={styles.bigIcon} size={60} color='#b5651b' name="ios-cart"/>
                </Col>
                <Col style={styles.iconWrapper} size={25}>
                  <Ionicons style={styles.bigIcon} size={60} color='#39cc6d' name="ios-gift"/>
                </Col>
                <Col style={styles.iconWrapper} size={25}>
                  <Ionicons style={styles.bigIcon} size={60} color='orange' name="ios-pulse"/>
                </Col>
              </Row>
            </Grid>
          </View>
          <Text style={styles.textHeader}>#Các khoản chi cố dịnh</Text>
          <HomeScrollView style={styles.scroll} items={scrollListFixed} />
          <Text style={styles.textHeader}>#Các khoản tiết kiệm lâu dài</Text>
          <HomeScrollView style={styles.scroll} items={scrollListLongterm} />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  topHome: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  content: {
    padding: 10,
    backgroundColor: '#e6ebf2'
  },
  textHeader: {
    marginTop: 5,
    marginBottom: 5
  },
  scroll: {
    marginBottom: 10
  },
  bigIcon: {
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  iconWrapper: {
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#C0C0C0',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    margin: 5
  }
});

