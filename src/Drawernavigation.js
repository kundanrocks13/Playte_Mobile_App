import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, Platform } from 'react-native';
import {createDrawerNavigator, createStackNavigator, DrawerItems} from 'react-navigation'; 
import Loginpage from './Loginpage';
import Signup from './Signup';
import  Dashboard from './Dashboard';
import { Tab, Left } from 'native-base';
import backgroundImage from '../assets/logo1.png';
import {Container, Content,Header, Body} from 'native-base';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const CustomDrawerContentComponent = (props) =>(
    <Container>
      <Header style={{height:200}}>
        <Body>
          <Image
          style={Styles.drawerImage}
          source={backgroundImage}/>
        </Body>
      </Header>
      <Content>
      {/* it shows drawer items like login, Signup , Home etc */}
      {/* for set the functionality of Drawernavigation on md-menu, which is establish on HeaderPage -
      we have to write ...props in HeaderPage */}
          <DrawerItems {...props}/> 
      </Content>
    </Container>
)


const Tabstack = createStackNavigator({
    DashBoard:{
        screen:Dashboard,
        navigationOptions:
        {header:null}
    }
})
const AuthStack = createStackNavigator({
    Login:{
        screen:Loginpage
        
    },
    Signup:{
        screen:Signup
    },
})
const Drawernavigation = createDrawerNavigator({
    Home:{
        screen:Tabstack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
              <MaterialIcons name='home' size={20} />
            )
          }
    },
    Login:{
        screen:AuthStack,
        navigationOptions:{
            tabBarIcon:({tintColor}) => (
            <MaterialIcons name='home' size={20} />)
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
        height:150,
        width:150,
        borderRadius:75,
    }
}) 
export default Drawernavigation;