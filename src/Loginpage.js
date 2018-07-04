import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right } from 'native-base';
import { font } from 'expo';
import { StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Text, View, Button, Image, StatusBar, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation';
import backgroundImage from '../assets/logo1.png';
import { StackNavigator } from 'react-navigation';
import { Icon, Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import {Signup}  from './Signup';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC14UAyqebrkrFaKxEiNXWtRPSCTNuKxFY",
  authDomain: "playfiksmobile.firebaseapp.com",
  databaseURL: "https://playfiksmobile.firebaseio.com",
  projectId: "playfiksmobile",
  storageBucket: "playfiksmobile.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default class Loginpage extends Component {
  static navigationOptions = {
    drawerIcon:(
      <Entypo name='login' size={25} />
    )
  }

  constructor(props){
    super(props)
    this.state=({
      email:'',
      password:''
    })
  }

  // navigateToAbout=(props)=>{
  //   this.props.navigation.navigate('Signup');
  // }
  
  render() {
    const{navigate}=this.props.navigation;
    return (
      
      <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle="light-content"/> */}
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      {/* <Header>
        <Left>
        <MaterialCommunityIcons name='face-profile' onPress={()=>
        this.props.navigation.navigate('DrawerOpen')} />
        </Left>
      </Header> */}
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.container}>
  
            <View style={styles.imagestyle}>
              <Image source={backgroundImage} style={{ height: 150, width: 150 }} />
            </View>

            {/* <Label style={{ color:'black' }} >Username</Label> */}
            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Enter Email"
              autoCapitalize='none'
              placeholderTextColor="grey"
              keyboardType="email-address"
              returnKeyType='next'
              onSubmitEditing={()=> this.refs.txtPassword.focus()}
            />

            {/* <Label style={{ color:'black' }} >Password</Label> */}
            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Enter Password"
              placeholderTextColor="grey"
              secureTextEntry={true}
              returnKeyType='next'
              autoCorrect={false}
              ref={"txtPassword"}

            
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={()=>{this.props.navigation.navigate('Signup')}}>Click Here, SignUp</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text>Forgot Password, Click Here</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.navigateToAbout }>
            <Text>Go to About Page</Text>
            </TouchableOpacity>

            
            
          
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:10,
    backgroundColor: '#536DFE',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagestyle: {
    alignItems: "center",
  },
  inputBox: {
    width: 300,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 7,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    margin: 10,
    backgroundColor: '#8BC34A',
    borderRadius: 7,
    width: 300,
    height: 45,
  },
  buttonText: {
    fontWeight:'bold',
    textAlign:'center',
    padding: 10,
    fontSize: 17,
    color:'#536DFE',
  }
});