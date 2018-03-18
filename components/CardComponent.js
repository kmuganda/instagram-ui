import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon } from 'native-base';

export default class CardComponent extends React.Component {
  render() {

    const images = {
      "1": require('../assets/1.jpg'),
      "2": require('../assets/2.jpg'),
      "3": require('../assets/3.jpg')
    }

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/me.jpg')} />
            <Body>
              <Text>Kaneja</Text>
              <Text note>March 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={images
            [this.props.imageSource]} style={{ height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline" style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send-outline" style={{ color: 'black' }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{fontWeight: "900"}}>Kaneja </Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
