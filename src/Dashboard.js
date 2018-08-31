import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator, DrawerNavigator, tabBarOptions } from 'react-navigation';
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
        <MaterialIcons name='home' color={tintColor} size={30} />
      )
    }
  },
  Subscription: {
    screen: Mysubscription,
    title:'My Subscriptions',
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Octicons name='checklist' color={tintColor} size={30} />
      )
    }
  },
  Store: {
    screen: Store,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons name='store' color={tintColor} size={30} />
      )
    }
  },
  Profile:{
    screen:Profile,
    navigationOptions:{
      tabBarIcon:({tintColor})=>(
        <MaterialCommunityIcons name='face-profile' color={tintColor} size={30}/>
      )
      
      
    }
  },
  
},{
  tabBarOptions: {
    activeTintColor:'red',
    inactiveTintColor: 'grey',
    style:{
      backgroundColor:'white',
      borderTopWidth:0,
      shadowOffset:{width:5,height:3},
      shadowColor:'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
}
);

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  }
})

