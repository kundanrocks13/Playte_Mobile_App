import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator, DrawerNavigator } from 'react-navigation';
import Loginpage from './Loginpage';
import Signup from './Signup';
import Home from './Home';
import Navi from './Navi';
import { Icon, Ionicons, MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import Store from './Store';
import Profile from './Profile';
import Mysubscription from './Mysubscription';

// export default class Home extends Component {
//   static navigationOptions={
//     header:null
//   }
//   render() {
//     return (
//       <View>
//         <View style={styles.homescreen}>
//           <Image source={backgroundImage} style={{width:200, height:200}} />
//         </View>
//       </View>
//     );
//   }
// }

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='home' size={30} />
      )
    }
  },
  Subscription: {
    screen: Mysubscription,
    title:'My Subscriptions',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Octicons name='checklist' size={30} />
      )
    }
  },
  Store: {
    screen: Store,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='store' size={30} />
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <MaterialCommunityIcons name='face-profile' size={30} />
      )
    }
  }
});

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  }
})

