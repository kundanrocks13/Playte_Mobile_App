import React, { Component } from 'react';
import { StyleSheet, Icon, View, Text, Image, StatusBar, Platform } from 'react-native';
import {createDrawerNavigator, createStackNavigator, DrawerItems} from 'react-navigation'; 
import Loginpage from './Loginpage';
import Signup from './Signup';
import  Dashboard from './Dashboard';
import Contactus from './Contactus';
import { Tab, Left } from 'native-base';
import backgroundImage from '../assets/logo1.png';
import {Container, Content,Header, Body} from 'native-base';
import { Foundation, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Home from './Home';
import Subscribe from './Subscribe';
import Vieworder from './checkout/Vieworder';

const CustomDrawerContentComponent = (props) =>(
    <Container>
      <Header style={{height:200}}>
        <Body>
            {/* logo for drawer navigation */}
          <Image
          style={Styles.drawerImage}
          source={backgroundImage}/>
        </Body>
      </Header>
      <Content>
      {/* it shows drawer items like login, Signup , Home etc */}
      {/* for set the functionality of Drawernavigation on md-menu, which is establish on Left side on HeaderSection (HeaderPage)-
      I have to write ...props in HeaderPage */}
          <DrawerItems {...props}/> 
      </Content>
    </Container>
)


// const Roo = createStackNavigator(
// {
//     Home: {
//     screen: Home,
//     // headerOptions: {
//     //   header: {visible:false},
//     // }
//     // navigationOptions:{
//     //  title:'playte',
//     //  headerRight:(
//     //    <TouchableOpacity onPress={LoginFun}> 
//     //      <Text>login</Text>
//     //      </TouchableOpacity>
//     //  )
//     // }
//     },
//     Subscribe: {
//     screen: Subscribe
//     // headerOptions: {
//     //   header: {visible:false},
//     // }
//     },
//     Vieworder: { 
//     screen: Vieworder,
//     headerOptions: {
//         header: null,
//     }
//     }
// },

// {
//     navigationOptions: {
//     headerStyle: {
//         backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//         fontWeight: 'bold',
//     },
//     },
// }
// );


const Tabstack = createStackNavigator({
    DashBoard:{
        screen:Dashboard,  // Front page of App
        navigationOptions:
        {header:null}        
    }
})
const AuthStack = createStackNavigator({
    Login:{
        screen:Loginpage,
        navigationOptions:{
            header:null
        }
    },
    Signup:{
        screen:Signup,
        navigationOptions:{
            header:null
        }
    },
})
const Contact = createStackNavigator({
    contactus:{
        screen:Contactus
    }
})


const Drawernavigation = createDrawerNavigator({
    Home:{
        screen:Tabstack,
        navigationOptions: {
            drawerIcon: ({ tintColor }) => (
                 <Entypo name="home" size={25}
                 color ={tintColor} />
            )
          }
    },
    Login:{
        screen:AuthStack,
        navigationOptions:{
            drawerIcon:({tintColor}) => (
            <MaterialCommunityIcons name='login' size={25} 
            color ={tintColor}/>)
        }
    },
    ContactUs:{
        screen:Contact,
        navigationOptions:{
            drawerIcon:({tintColor}) => (
                <Foundation name='telephone' size={25}
                color ={tintColor}/>
            )
        }
    }
},
{
    initialRouteName:'Home',
    drawerPosition:'left',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute:'DrawerOpen',
    drawerCloseRoute:'DrawerClose',
    drawerPosition:'Left',
    drawerWidth:250,
    contentOptions:{
    activeTintColor:'red',
    }
}
);


const Styles=StyleSheet.create({
    drawerImage:{
        height:120,
        width:120,
        borderRadius:60,
        // justifyContent:'center',
        // alignItems:'center',
        marginLeft:50
    }
}) 
export default Drawernavigation;