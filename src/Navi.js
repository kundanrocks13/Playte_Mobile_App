import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View, TouchableOpacity} from 'react-native';
import Signup from './Signup';
import Loginpage from './Loginpage';
import {
  createStackNavigator,
} from 'react-navigation';



class Navi extends React.Component {
  // static navigationOptions = {
  //   title: 'Welcome',
  // };
  render() {
    return (
      <TouchableOpacity>
      <Text
        
        onPress={() =>
          {
            this.props.navigation.navigate('Profile')
          }
        }
      >Click Here</Text>
      </TouchableOpacity>
    );
  }
}

const Appp = createStackNavigator({
  Home: { screen: Navi },
  Profile: { screen: Signup },
});

export default Appp;