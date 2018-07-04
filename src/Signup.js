import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right } from 'native-base';
import { font } from 'expo';
import { StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Text, View, Button, Image, StatusBar, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation';
import backgroundImage from '../assets/logo1.png';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import * as firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC14UAyqebrkrFaKxEiNXWtRPSCTNuKxFY",
  authDomain: "playfiksmobile.firebaseapp.com",
  databaseURL: "https://playfiksmobile.firebaseio.com",
  projectId: "playfiksmobile",
  storageBucket: "playfiksmobile.appspot.com",
};

export default class Signup extends Component {
  static navigationOptions = {
    drawerIcon:(
      <FontAwesome name='sign-in' size={25} />
    )
  }
  constructor(props){
    super(props)
    this.state=({
      email:'',
      password:''
    })
  }
  
  signUpUser=(email,password)=>{
    try{
      if(this.state.password.length<6){
        alert("please enter at least 6 characters")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email,password)
      }
      catch(error){
        console.log(error.toString())
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      
        
            <View style={styles.imagestyle}>
              <Image source={backgroundImage} style={{ height: 150, width: 150 }} />
            </View>

            {/* <Label style={{ color:'black' }} >Username</Label> */}
            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Enter your Name"
              placeholderTextColor="grey"
              keyboardType="email-address"
              returnKeyType='next'
              onSubmitEditing={()=> this.refs.txtEmail.focus()}
            />

            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Enter your Email"
              placeholderTextColor="grey"
              keyboardType="email-address"
              returnKeyType='next'
              ref={'txtEmail'}
              onSubmitEditing={()=> this.refs.txtMobile.focus()}
              onChangeText={(email)=>this.setState({email})}
            />

            {/* <Label style={{ color:'black' }} >Password</Label> */}
            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Enter your Mobile"
              placeholderTextColor="grey"
              returnKeyType='next'
              ref={'txtMobile'}
              onSubmitEditing={()=> this.refs.txtPassword.focus()}
            />

            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Password"
              placeholderTextColor="grey"
              returnKeyType='next'
              secureTextEntry
              ref={'txtPassword'}
              onChangeText={(password)=>this.setState({password})}
            />

            <TouchableOpacity style={styles.button}
            onPress={()=>this.signUpUser(this.state.email, this.state.password)}
            >
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Already account, Click Here</Text>
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
    textAlign:'center',
    padding: 10,
    fontWeight:'bold',
    fontSize: 17,
    color:'#536DFE',
  }
});