import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Loginpage from './src/Loginpage';
import Signup from './src/Signup';
import Landing from './src/Landing';
import Dashboard from './src/Dashboard';
import Drawernavigation from './src/Drawernavigation'
import { Icon, Ionicons, MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Body } from 'native-base';
import Subscribe from './src/Subscribe';
import Vieworder from './src/checkout/Vieworder';
import createStackNavigator from 'react-navigation';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Landing' };
    // Animation for Playte logo start here
    setTimeout(() => {
      this.setState({ currentScreen: 'Drawernavigation' })
    }, 3000)
    // Animation for Playte logo Ends here
  }
  render() {
    <View>
        <StatusBar barStyle='light-content'  backgroundColor='red'/>
      </View>
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'Landing' ? <Landing /> : <Drawernavigation />
    return mainScreen
  }
}

