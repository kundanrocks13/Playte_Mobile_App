import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right } from 'native-base';
import { font } from 'expo';
import { StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Text, View, Button, Image, StatusBar, SafeAreaView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import { NavigationActions } from 'react-navigation';
import logoimage from '../assets/logo1.png';
import bg from '../images/limonata.jpg';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import {Loginpage} from './Loginpage.js';
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
      name:'',
      email:'',
      mobile:'',
      password:'',

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
    const{navigate}=this.props.navigation;
    return (
      <ImageBackground source={require('../images/limonata.jpg')} style={{alignSelf:'stretch', width:null, height:null, flex:1}}>
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
              placeholder='Name'
              placeholderTextColor='black'
              returnKeyType='next'
              autoCorrect={false}
            />

            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder='Mobile'
              placeholderTextColor='black'
              returnKeyType='next'
            />

            <TextInput style={styles.inputBox} underlineColorAndroid='transparent'
              placeholder="Email"
              autoCapitalize='none'
              placeholderTextColor="black"
              keyboardType="email-address"
              returnKeyType='next'
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

            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={()=>{this.props.navigation.navigate('Signup')}}>Click Here, SignUp</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button}
              onPress={()=>this.signUpUser(this.state.email, this.state.password)}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            
            <View style={{flexDirection:'row', margin:15}}>
            <TouchableOpacity 
            // in navigate option value write only navigation screen name 
            onPress={()=>{this.props.navigation.navigate('Login')}}
            >
              <Text style={{color:'blue', fontSize:17, fontStyle:'italic'}}
              >Login Here</Text>
            </TouchableOpacity>
            <Text style={{fontSize:17}}> or </Text> 
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DashBoard')}}>
              <Text style={{color:'red', fontSize:17, fontStyle:'italic'}}> Go to Home </Text>
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
    marginTop:10,
  },
  buttonText: {
    fontWeight:'bold',
    fontSize: 17,
    color:'#536DFE',
  }
});