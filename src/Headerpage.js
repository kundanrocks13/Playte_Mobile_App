import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, Content, Text } from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Loginpage from './Loginpage';
import Signup from './Signup';
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
  
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <View>
        <Header style={{ height: 70 }}>

          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()
            }>
              <Icon name='md-menu' />
            </Button>
          </Left>
          <Body>
            <Title>Playte</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            {/* <Button transparent>
              <Icon name='heart' onPress={()=> this.props.navigation.navigate('Loginpage')}/>
            </Button> */}
            <Button transparent>
              <Icon name='more' />
            </Button>
            {/* <TouchableOpacity style={styles.buttonsize} onPress={()=>this.props.navigation.navigate('Login')}>
            <Text style={{ textAlign:'center',padding:5, color:'blue'}}>Login</Text>
            </TouchableOpacity> */}

          </Right>
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