import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import backgroundImage from '../assets/logo1.png';

export default class Landing extends Component {
  static navigationOptions={
    header:null
  }
  render() {
    return (
      <View>
        <View style={styles.homescreen}>
          <Image source={backgroundImage} style={{width:270, height:270}} />
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  homescreen:{
    flex:1,
    alignItems:'center',
    marginTop:150,
  }
})

