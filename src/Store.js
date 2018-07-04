import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import backgroundImage from '../assets/logo1.png';
import {createStackNavigator, NavigationActions, createMaterialTopTabNavigator} from 'react-navigation';
import Subscribe from './Subscribe';

var ImageArray=[
  require('../assets/download1.jpg'),
  require('../assets/download2.jpg'),
  require('../assets/download3.jpg'),
];

class Cardsection extends React.Component {
  static navigationOptions={
    header:null,
  };

  ImageCard(){
    return ImageArray.map((image, index)=>{
      return(
        <Card key={ index } >
        <CardItem>
          <Left>
            {/* <Thumbnail source={backgroundImage} /> */}
            <Body>
              <Text>Our Store</Text>
              <Text note></Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={image} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem style={{ height: 80 }}>
          <Left>
            {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}
                onPress={() => {
                  this.props.navigation.navigate('Profile', { data: "daily subscription plan", Img:image })
                }
                }
              >
                Subscribe Plan
            </Text>
            </TouchableOpacity> */}

          </Left>
        </CardItem>
        {/* <CardItem>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Subscribe Plan</Text>
          </TouchableOpacity>
        </CardItem> */}
        {/* <CardItem>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem> */}
      </Card>
      )
    })
  }
  render() {
    // if (!this.state.isReady) {
    //   return <Expo.AppLoading />;
    //   }
    return (
      <Content>
        {/* <Headerpage {...this.props}/> */}
        {this.ImageCard()}
      </Content>
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
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Cardsection,
      // headerOptions: {
      //   header: {visible:false},
      // }
      // navigationOptions:{
      //  title:'playte',
      //  headerRight:(
      //    <TouchableOpacity onPress={LoginFun}> 
      //      <Text>login</Text>
      //      </TouchableOpacity>
      //  )
      // }
    }
    // Profile: {
    //   screen: Subscribe,
    //   headerOptions: {
    //     headerLeft: null,
    //   }
    // }
    // Login:{
    //   screen: Loginpage
    // }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);


export default class Cardimage extends React.Component {
  render() {
    return <RootStack />;
  }
}

