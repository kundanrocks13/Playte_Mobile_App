import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, 
  Button, Icon, Title, View,
  Content, Text
 } from 'native-base';
import { StyleSheet, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Loginpage from './Loginpage';
import Signup from './Signup';
import Expo from 'expo';
// import Drawernavigation from './Drawernavigation';

export default class Headerpage extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  // componentWillMount(){
  //   this.startHeaderHeight = 60
  //   if(Platform.OS == 'ios')
  //   {
  //     this.startHeaderHeight = 100 + StatusBar.currentHeight
  //   }
  // }
  
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <View>
        {/* this.startHeaderHeight */}
        <Header style={{ height: 60, borderBottomColor:'red', borderBottomWidth:1,backgroundColor:'#820D77' }}>
          <View>
            <StatusBar barStyle='light-content'/>
          </View>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name='md-menu' />
            </Button>
          
          </Left>
          <Body style={{marginLeft:70}}>
            <Title>Playte</Title>
          </Body>
          {/* <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' onPress={()=> this.props.navigation.navigate('Loginpage')}/>
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
            <TouchableOpacity style={styles.buttonsize} onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{ textAlign:'center',padding:5, color:'blue'}}>Login</Text>
            </TouchableOpacity>

          </Right> */}
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsize: {
    width: 80,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 15,
  },
});