import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import StarRating from 'react-native-star-rating';
import { createStackNavigator, NavigationActions, createMaterialTopTabNavigator } from 'react-navigation';
const {height, width} =Dimensions.get('window')


 export default class Home_components extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    
    return (
        // <TouchableOpacity onPress={alert("set your subscribe page")}>
        <TouchableOpacity onPress={() => {
          this.props.navigation.navigate('Subscribe')
        }
        }>
        <View style={{backgroundColor:'white',width:this.props.width/2-30, height:this.props.width/2-10, borderWidth:1, borderColor:'#dddddd',marginBottom:10}}>
            
            <View style={{flex:2}}>
                <Image style={{flex:1, width:null, height:null, resizeMode:'cover'}} source={this.props.imageUri}/>
            </View>
            <View style={{flex:1, alignItems:'flex-start', justifyContent:'space-evenly', padding:10}}>
                <Text style={{fontSize:14, color:'red', fontWeight:'bold'}}>{this.props.juicename}</Text>
                
                {/* <Text style={{fontSize:13, color:'green'}}  >Available</Text> */}
                
                
                <Text style={{fontSize:13,  fontWeight:'bold',paddingBottom:5}}>Price:{this.props.price}</Text>
                <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.props.rate}
                    starSize={10}
                    fullStarColor='green'
                />
            </View>
            
        </View>
        </TouchableOpacity>
      
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


