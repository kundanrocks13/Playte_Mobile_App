import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image, SafeAreaView, Platform, Dimensions, TouchableOpacity } from 'react-native';
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


import Payment from './checkout/Payment';
// import Subscribe from './Screens/Subscribe';
import Vieworder from './checkout/Vieworder';
import Subscribe from './Subscribe';
import Home_components from './Home_components';
import Home_components2 from './Home_components2';

const {height, width} =Dimensions.get('window')

class Home extends Component {
    render() {
        return (
            <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
            <Container>
                <View>
                {/* Here, sets the functionality on md-menu, which in Headerpage  */}
                <Headerpage {...this.props}/>
                </View>
                {/* <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () =>this.props.navigation.navigate('DrawerOpen') }}
                    centerComponent={{  text: 'Playte', style: { fontSize:22, color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    /> */}
                    {/* <Drawernavigation/> */}
                    {/* <Headerpage/> */}
                    {/* <Cardimage  {...this.props}/> */}
                <ScrollView 
                    scrollEventThrottle={16}
                    style={{backgroundColor:'white'}}
                >
                    <View style={{flex:1, backgroundColor:'white'}}>
                    {/* <Text> kundan kumar </Text> */}
                        <View style={{height:120, marginTop:20}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <Home_components imageUri={require('../assets/images2.jpg')} name="orange"/>
                                <Home_components imageUri={require('../assets/apple.jpg')} name="apple"/>
                                <Home_components imageUri={require('../assets/lemon.jpg')} name="lemon"/>
                                <Home_components imageUri={require('../assets/carrot.jpg')} name="carrot"/>
                            </ScrollView>
                    
                        </View>
                        <View style={{flex:1, marginTop:15,paddingHorizontal:5}}>
                            <Text style={{fontSize:18, fontWeight:'500',paddingLeft:90, color:'#7F2513' }}>Playte with Athletes</Text>
                        </View>
                        <View style={{height:200, width: width, marginTop:10, padding:10}}>
                            <Image style={{flex:1, height:null, width:null, resizeMode:'cover', borderRadius:5, borderColor:'grey', borderWidth:1}} source={require('../assets/image99.jpg')}/>
                        </View>
                    </View>

                    
                        <Text style={{flex:1, fontSize:18,fontWeight:'500',paddingHorizontal:15, paddingTop:10, paddingLeft:90, color:'#7F2513'}}>Juice served by Playte</Text>
                        
                    <View style={{paddingHorizontal:20,marginTop:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                        
                        {console.log("inner")}
                        <Home_components2 width={width} imageUri={require('../assets/yellow.jpg')} juicename={"Lime Juice"} rate={4} price={'2$'} {...this.props}/>
                        
                        <Home_components2 width={width} imageUri={require('../assets/green.jpg')} juicename={"custurd apple juice"} rate={3} price={'1$'} {...this.props}/>
                        <Home_components2 width={width} imageUri={require('../assets/Pome.jpg')} juicename={"Pomegranate juice"} rate={4.5} price={'0.6$'} {...this.props}/>
                        <Home_components2 width={width} imageUri={require('../assets/red.jpg')} juicename={"Papaya Juice"} rate={5} price={'1$'} {...this.props}/>
                        <Home_components2 width={width} imageUri={require('../assets/cust.jpg')} juicename={"Beetroot Juice"} rate={4.5} price={'0.6$'} {...this.props}/>
                        <Home_components2 width={width} imageUri={require('../assets/lemon.jpg')} juicename={"Lemon Juice"} rate={5} price={'1$'} {...this.props}/>
                    </View>  
                    
                </ScrollView>
                   
            </Container>
            </View>
            </SafeAreaView>
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
        screen: Subscribe,
      },
    Vieworder: { 
    screen: Vieworder,
    // navigationOptions:
    //     {header:null}
    },
    payment: {
        screen: Payment
    }
})

export default Tabstack;


