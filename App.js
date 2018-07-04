import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import Loginpage from './src/Loginpage';
import Signup from './src/Signup';
import Landing from './src/Landing';
import Dashboard from './src/Dashboard';
import Drawernavigation from './src/Drawernavigation'
import { Icon, Ionicons, MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Body } from 'native-base';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: 'Landing' };
    setTimeout(() => {
      this.setState({ currentScreen: 'Drawernavigation' })
    }, 3000)
  }
  render() {
    const { currentScreen } = this.state
    let mainScreen = currentScreen === 'Landing' ? <Landing /> : <Drawernavigation />
    return mainScreen
  }
}



const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
