import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import backgroundImage from '../assets/logo1.png';
import Signup from './Signup';
import Home from './Home';
import { createStackNavigator, NavigationActions, createMaterialTopTabNavigator } from 'react-navigation';
import Subscribe from './Subscribe';
import Headerpage from './Headerpage';

var ImageArray = [
  require('../assets/juice1.jpg'),
  require('../assets/images1.jpg'),
  require('../assets/images2.jpg'),
  require('../assets/images4.jpg'),
];

class Cardsection extends React.Component {
  static navigationOptions = {
    header: null,
  };

  // constructor() {
  //   super();
  //   this.state = {
  //   isReady: false
  //   };
  //   }

  //   async componentWillMount() {
  //   await Expo.Font.loadAsync({
  //   Roboto: require("native-base/Fonts/Roboto.ttf"),
  //   Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  //   Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  //   });
  //   this.setState({ isReady: true });
  //   }
  ImageCard() {
    return ImageArray.map((image, index) => {
      return (
        <Card key={index} >
          <CardItem>
            <Left>
              <Thumbnail source={backgroundImage} />
              <Body>
                <Text>Daily Subscription Plan</Text>
                <Text note>Fruit Juice</Text>
              </Body>
            </Left>
          </CardItem>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Profile', { data: "daily subscription plan", Img: image })
            }
            }>

            <CardItem cardBody>
              <Image source={image} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>

            <CardItem style={{ height: 80 }}>
              <Left>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    Subscribe Plan
                  </Text>
                </View>
              </Left>
            </CardItem>
          </TouchableOpacity>
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
// const LoginFun=()=>{

//   const navigateAction = NavigationActions.navigate({
//     routeName: 'Loginpage',

//     params: {},

//     action: NavigationActions.navigate({ routeName: 'Login' }),
//   });

//   this.props.navigation.dispatch(navigateAction);
// }
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
    },
    Profile: {
      screen: Subscribe,
      headerOptions: {
        headerLeft: null,
      }
    }
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

// const tab=createMaterialTopTabNavigator({
//   Home:{screen:Loginpage},
//   cate:{screen:Signup}
// })

export default class Cardimage extends React.Component {
  render() {
    return <RootStack />;
  }
}
