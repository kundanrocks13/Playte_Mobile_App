import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Left, Right, CheckBox } from 'native-base';
import {ActivityIndicator} from 'react-native';
import { font } from 'expo';
import { StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Text, View, Button, Image, StatusBar, SafeAreaView, KeyboardAvoidingView, ImageBackground } from 'react-native'
import { NavigationActions } from 'react-navigation';
import logoimage from '../assets/logo1.png';
import bg from '../images/limonata.jpg';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import {Loginpage} from './Loginpage.js';
// import * as firebase from 'firebase';
// Initialize Firebase
// const firebaseConfig = {
//   apiKey: "AIzaSyC14UAyqebrkrFaKxEiNXWtRPSCTNuKxFY",
//   authDomain: "playfiksmobile.firebaseapp.com",
//   databaseURL: "https://playfiksmobile.firebaseio.com",
//   projectId: "playfiksmobile",
//   storageBucket: "playfiksmobile.appspot.com",
// };

export default class Signup extends Component {
  static navigationOptions = {
    drawerIcon:(
      <FontAwesome name='sign-in' size={25} />
    )
  }
  constructor(props){
    super(props);
    this.state=({
      mobile:'',
      email:'',
      password:'',
      username:'',
      uservalidate:false,
      emailValdate:false,
      passwordValdate:false,
      mobileValidate:false,
      dataSource:null,
    })
  }

  // componentWillMount () {
    
  // }
  
  validate(text, type) {
    var user = /^\w+[a-zA-Z ]{3,30}$/
    var mail = /^\w+.+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    var pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    var mob = /^\w+[0-9]{10}$/

    if(type == 'username')
    {
      if(user.test(text)){
        this.setState({
          uservalidate: true,
        })
      }
      else{
        this.setState({
          uservalidate:false,
        })
      }
    }

    else if (type == 'mobile') {
      if(mob.test(text)){
        this.setState({
          mobileValidate: true,
        })
      }
      else{
        this.setState({
          mobileValidate: false,
        })
      }
    }

    else if (type == 'email') {
        if (mail.test(text)) {
            this.setState({
                emailValdate: true,
            })
        }
        else {
            this.setState({
                emailValdate: false,
            })
        }
    }

    else if (type == 'password') {
        if (pass.test(text)) {
            this.setState({
                passwordValdate: true,
            })
        }
        else {
            this.setState({
                passwordValdate: false,
            })
        }
    }
}

  signUpUser=(username, email, password, mobile)=>{
    try{
      // var characters='ABC';
      // var incre=0;
      // for(var i=0; i<username.length; i++)
      // {
      //   console.log(username.length);
      //   for(var j=0; j<characters.length; j++)
      //   {
      //     console.log(characters.length);
      //     if(username[i]==characters[j])
      //     {
      //       incre++;
      //       // console.log(incre);
      //       console.log("kundan",incre);
      //     }
      //   }
      // }
      // if(incre==0)
      // {
      //   alert("username is valid");
      // }
      // if(incre!=0)
      // {
      //   alert("user is not valid");
      // }
      if(username.length==" " || email.length==" " || password.length==" " || mobile.length==" ")
      {
        alert("All Fields are required");
      }
      else if(password.length < 8)
      {
        alert("Password should be at least 8 characters");
      }
      // else if(mobile.length == 10 )
      // {
      //   console.log(mobile.length);
      //   alert("Please enter Correct mobile Number");
      // }
      else
      {
        fetch('http://13.232.37.7:8001/Signup/', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.username,
            mobile: this.state.mobile,
            email: this.state.email,
            password: this.state.password,
          }),
        })
        .then( (response) => response.json() )
        .then( (responseJson) => {
          return responseJson.Signup;
        })

        .catch((error) => {
          console.log(error)
        });
      }
      // firebase.auth().createUserWithEmailAndPassword(email,password)
      }
      catch(error){
        console.log(error.toString())
    }
  }


  render() {
    const{navigate}=this.props.navigation;
    let{username,email,password,mobile}=this.state;
    return (
      <ImageBackground source={require('../images/limonata.jpg')} style={{alignSelf:'stretch', width:null, height:null, flex:1}}>
      <KeyboardAvoidingView style={styles.container}>
      <View>
        <StatusBar barStyle='dark-content' backgroundColor='white'/>
      </View>
        <View style={{flex:1,alignItems:'center', justifyContent:'flex-end'}}>
          <View style={styles.imagestyle}>
            <Image source={logoimage} style={{ height: 120, width: 120 }} />
          </View>
          <View style={styles.inputText}>
          <TextInput style={{flex:1}} underlineColorAndroid='transparent'
            placeholder='Name'
            placeholderTextColor='#515151'
            returnKeyType='next'
            autoCorrect={false}
            autoCapitalize='none'
            maxLength={30}
            value={username}
            onChangeText={(username)=>{this.setState({username}); this.validate(username, 'username')}}
          />
          {
            this.state.username==''?null:
            this.state.uservalidate?<FontAwesome name="check-circle" size={25} style={{marginRight:10, color:'green'}}/>:
            <MaterialIcons name="cancel" size={25} style={{marginRight:10, color:'red'}}/>
          }
          </View>

          <View style={styles.inputText}>
          <TextInput style={{flex:1}} underlineColorAndroid='transparent'
            placeholder="Mobile"
            placeholderTextColor='#515151'
            returnKeyType='next'
            autoCorrect={false}
            maxLength={14}
            value={mobile}
            onChangeText={(mobile)=>{this.setState({mobile}); this.validate(mobile, 'mobile')}}
          />
          {
            this.state.mobile==''?null:
            this.state.uservalidate?<FontAwesome name="check-circle" size={25} style={{marginRight:10, color:'green'}}/>:
            <MaterialIcons name="cancel" size={25} style={{marginRight:10, color:'red'}}/>
          }
          </View>

          <View style={styles.inputText}>
          <TextInput style={{flex:1}} underlineColorAndroid='transparent'
            placeholder="Email"
            autoCapitalize='none'
            placeholderTextColor="#515151"
            keyboardType="email-address"
            returnKeyType='next'
            value={email}
            onChangeText={(email)=>{this.setState({email}); this.validate(email, 'email')}}
          />
          {
            this.state.email==''?null:
            this.state.emailValdate?<FontAwesome name='check-circle' size={25} style={{marginRight:10, color:'green'}}/>:
            <MaterialIcons name='cancel' size={25} style={{marginRight:10, color:'red'}}/>
            
          }
          
          </View>

          {/* <Label style={{ color:'black' }} >Password</Label> */}
          <TextInput style={styles.inputText} underlineColorAndroid='transparent'
            placeholder="Password"
            placeholderTextColor="#515151"
            secureTextEntry={true}
            autoCorrect={false}
            value={password}
            onChangeText={(password)=>{this.setState({password}); this.validate(password,'password')}}
          />
          {/* <Button iconLeft style={styles.button}>
            <Feather name='log-in'size={22} color={'white'}/>
            <Text style={styles.buttonText}>Login</Text>
          </Button> */}

          {/* <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={()=>{this.props.navigation.navigate('Signup')}}>Click Here, SignUp</Text>
          </TouchableOpacity> */}
        
          <TouchableOpacity style={styles.button}
            onPress={()=>this.signUpUser(this.state.username, this.state.email, this.state.password, this.state.mobile)}>
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
  },
  inputText:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin:10, 
    backgroundColor:'white',
    width: 300,
    height:45,
    paddingLeft: 10,
    borderRadius:10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderColor:'black',
    borderWidth:0.5,
    
  }
});