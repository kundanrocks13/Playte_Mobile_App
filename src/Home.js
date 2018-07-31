import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, Platform } from 'react-native';
import backgroundImage from '../assets/logo1.png';
import { Container, Content, Left } from 'native-base';
import {createStackNavigator} from 'react-navigation'; 
import Swiper from 'react-native-swiper';
import cardImage2 from '../assets/images2.jpg';
// import { Ionicons, MaterialIcons, MaterialCommunityIcons, Octicons}from '@expo/vector-icon';
import { Icon, Header, ListItem } from 'react-native-elements'
import Loginpage from './Loginpage';
import Signup from './Signup';
import Cardimage from './Cardimage';
import Headerpage from './Headerpage';
import Subscribe from './Subscribe';
import Vieworder from './checkout/Vieworder';

class Home extends Component {

    // static navigationOptions = ({
    //     headerTitle:(
            
    //         <Left style={{flexDirection:'row'}}>
    //             <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{color:'black', marginLeft:15, marginRight:105}}/>
            
    //         {/* <View style={[{flex:1, alignItems:"center"}]}> */}
    //         <Image
    //         style={{
    //             width:45,
    //             height:45,
    //         }}
    //         source={backgroundImage}
    //         />
    //         {/* </View> */}
    //         </Left>
            
    //     ),
    //     headerLeft:null,
    //     headerRight:null,
    // })

    render() {
        return (
            <Container>
                {/* Here, sets the functionality on md-menu, which in Headerpage  */}
                <Headerpage {...this.props}/>
                {/* <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () =>this.props.navigation.navigate('DrawerOpen') }}
                    centerComponent={{  text: 'Playte', style: { fontSize:22, color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    /> */}
                    {/* <Drawernavigation/> */}
                    {/* <Headerpage/> */}
                    <Cardimage  {...this.props}/>
                  
                   
            </Container>
        );
    }
}

const Tabstack = createStackNavigator({
    Home:{
        screen:Home,  // Front page of App
        navigationOptions:
        {header:null}        
    },
    Subscribe: {
        screen: Subscribe
      },
    Vieworder: { 
    screen: Vieworder,
    // navigationOptions:
    //     {header:null}
    }
})

export default Tabstack;


