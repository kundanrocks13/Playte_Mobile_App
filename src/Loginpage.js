import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right, Button, Icon, Text } from 'native-base';
import { font } from 'expo';
import { StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, View, Image, StatusBar, SafeAreaView, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import logoimage from '../assets/logo1.png';
import { StackNavigator } from 'react-navigation';
import bg from '../images/juice.jpg';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
import {Signup}  from './Signup';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC14UAyqebrkrFaKxEiNXWtRPSCTNuKxFYmineral-water",
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

  render() {
    const{navigate}=this.props.navigation;
    return (
      <ImageBackground source={require('../images/juice.jpg')} style={{alignSelf:'stretch', width:null, height:null, flex:1}}>
      <KeyboardAvoidingView style={styles.container}>
      
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View> */}
      <View>
        <StatusBar barStyle='dark-content' backgroundColor='white'/>
      </View>
      <View style={{flex:1,alignItems:'center', justifyContent:'flex-end'}}>
  
            <View style={styles.imagestyle}>
              <Image source={logoimage} style={{ height: 120, width: 120 }} />
            </View>

            {/* <Label style={{ color:'black' }} >Username</Label> */}
            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Email"
              autoCapitalize='none'
              placeholderTextColor="black"
              keyboardType="email-address"
              returnKeyType='next'
              // autoFocus={true}
            />

            {/* <Label style={{ color:'black' }} >Password</Label> */}
            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Password"
              placeholderTextColor="black"
              secureTextEntry={true}
              autoCorrect={false}
            />

            {/* <Button iconLeft style={styles.button}>
              <Feather name='log-in'size={22} color={'white'}/>
              <Text style={styles.buttonText}>Login</Text>
            </Button> */}
            

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={()=>{this.props.navigation.navigate('Signup')}}>Click Here, SignUp</Text>
            </TouchableOpacity> */}
            <View style={{flexDirection:'row', margin:15, paddingRight:10,}}>
            <TouchableOpacity >
              <Text style={{color:'blue'}}>Forgot Password</Text>
            </TouchableOpacity>
            <Text> or </Text>
            <TouchableOpacity>
              <Text style={{color:'red'}} onPress={()=>{this.props.navigation.navigate('Signup')}}>Sign Up</Text>
            </TouchableOpacity>
            </View>

     </View>
     {/* </View>
      </TouchableWithoutFeedback> */}
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagestyle: {
    alignItems: "center",
  },
  inputBox: {
    width: 300,
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 40,
    paddingLeft: 20,
    marginTop:10,
  },
  button: {
    backgroundColor: '#8BC34A',
    borderRadius: 40,
    marginLeft:6,
    width: 300,
    height: 40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  buttonText: {
    fontWeight:'bold',
    fontSize: 17,
    color:'#536DFE',
  }
});