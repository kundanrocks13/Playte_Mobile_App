import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import { createStackNavigator, NavigationActions, createMaterialTopTabNavigator } from 'react-navigation';




 export default class Home_components extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
        
        <View style={{height:120, width:120, marginLeft:20, borderWidth:0.5, borderColor:"#dddddd"}}>
            <View style={{flex:2}}>
            <Image source={this.props.imageUri}
            style={{flex:1,width:null, height:null, resizeMode:'cover'}}/>
            
            </View>
            <View style={{flex:1,paddingLeft:10, paddingTop:10}}>
            <Text>{this.props.name}</Text>
            </View>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    backgroundColor: '#8BC34A',
    borderRadius: 7,
    width: 320,
    height: 35,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:2,
  }
})


