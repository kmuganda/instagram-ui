import React from 'react';
import { Text, View, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import Media from './AppTabNavigator/Media';
import Home from './AppTabNavigator/Home';
import Likes from './AppTabNavigator/Likes';
import Profile from './AppTabNavigator/Profile';
import Search from './AppTabNavigator/Search';

export default class MainScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <AppTabNavigator />
    );
  }
}

  const AppTabNavigator = TabNavigator({
    Home: { screen: Home },
    Search: { screen: Search },
    Media: { screen: Media },
    Likes: { screen: Likes },
    Profile: { screen: Profile }
  },{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        ...Platform.select({
          andriod: {
            backgroundColor: 'white'
          }
        })
      }
    }
  });
