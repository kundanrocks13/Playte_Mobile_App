import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import backgroundImage from '../assets/logo1.png';
import Signup from './Signup';
import Home from './Home';
import { createStackNavigator, NavigationActions, createMaterialTopTabNavigator } from 'react-navigation';
import Subscribe from './Subscribe';
import Headerpage from './Headerpage';
import Vieworder from './checkout/Vieworder';

var ImageArray = [
  require('../assets/juice1.jpg'),
  require('../assets/images1.jpg'),
  require('../assets/images2.jpg'),
  require('../assets/images4.jpg'),
];

 export default class Cardsection extends React.Component {
  static navigationOptions = {
    header: null,
  };

  ImageCard() {
    return ImageArray.map((image, index) => {
      return (
        <Card key={index}>
          <CardItem>
            <Left>
              <Thumbnail source={backgroundImage} />
              <Body>
                {/* <Text>Day Subscription Plan</Text> */}
                <Text note>Name of Juice</Text>
              </Body>
            </Left>
          </CardItem>
          <View
            style={{borderBottomColor:'grey',
            borderBottomWidth:0.5,}}
          />
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Subscribe', { data: "Name of Juice", Img: image })
            }
            }>

            <CardItem cardBody>
              <Image source={image} style={{ height: 200, width: null, flex: 1 }} />
            </CardItem>
            <View
            style={{borderBottomColor:'grey',
            borderBottomWidth:0.5
          }} 
            />
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
    return (
      <Content>
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
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:2,
  }
})

// const RootStack = createStackNavigator(
//   {
//     Home: {
//       screen: Cardsection,
//       // headerOptions: {
//       //   header: {visible:false},
//       // }
//       // navigationOptions:{
//       //  title:'playte',
//       //  headerRight:(
//       //    <TouchableOpacity onPress={LoginFun}> 
//       //      <Text>login</Text>
//       //      </TouchableOpacity>
//       //  )
//       // }
//     },
//     Subscribe: {
//       screen: Subscribe,
//       // headerOptions: {
//       //   header: {visible:false},
//       // }
//     },
//     Vieworder: { 
//       screen: Vieworder,
//       headerOptions: {
//         header: null,
//       }
//     }
//   },

//   {
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );

// export default class Cardimage extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }

