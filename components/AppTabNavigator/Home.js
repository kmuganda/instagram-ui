import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {
  Icon,
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body } from 'native-base';
import CardComponent from '../CardComponent';

export default class Home extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>

        <Header>
          <Left><Icon name="ios-camera-outline" style={{ paddingLeft: 10 }}>
          </Icon></Left>
          <Body><Text>Instagram</Text></Body>
          <Right><Icon name="ios-send-outline" style={{ paddingRight: 10 }}>
          </Icon></Right>
        </Header>
        <Content>
          <View style={{height: 100}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent:
            'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                <Text style={{fontWeight: 'bold'}}>Stories</Text>
                <View style={{flexDirection: 'row', 'alignItems': 'center'}}>
                  <Icon name="md-play" style={{fontSize: 14}}></Icon>
                  <Text style={{fontWeight: 'bold'}}>Watch All</Text>
                </View>
            </View>
            <View style={{flex: 3}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/thumb1.jpg')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/thumb2.jpg')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/thumb3.jpg')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/thumb4.jpg')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/thumb5.jpg')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/thumb6.jpg')} />
                <Thumbnail
                style={{marginHorizontal: 5, borderColor: 'black',
                borderWidth: 2}}
                source={require
                ('../../assets/thumb7.jpg')} />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="1" likes="101"/>
          <CardComponent imageSource="2" likes="201"/>
          <CardComponent imageSource="3" likes="301"/>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
