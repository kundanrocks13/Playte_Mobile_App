import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, View } from "native-base";

export default class Vieworder extends Component {
  static navigationOptions={

        headerStyle: {height: 35, backgroundColor: 'white',
        shadowColor: 'grey',
        borderRadius: 10,
        shadowOpacity: 5,
        margin:8,
        padding:5,
    }
  }
  constructor(props){
    super(props)
    this.state={
      // check:this.props.navigation.state.val.check,
      // // date:this.props.navigation.state.params.date,
      // juice:this.props.navigation.state.val.juice
    }
  }
  
  render() {
    // const children = this.props.navigation.state.params.check
    return (
      // <View key={this.props.keyval} >
      
      // <Text>{this.props.val.check}</Text>
      // <Text>{this.props.val.juice}</Text>
      // {/* <Text>{this.state.check}</Text>
      // <Text>{this.state.juice}</Text> */}
      
      //   </View>

      
                
                <View>
                <View key={this.props.keyval} style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:17,paddingRight:17}} >
               
                  
                <Text style={{fontSize:13}}>{this.props.val.check}</Text>
                <Text style={{fontSize:13}}>{this.props.val.juice}</Text>
                <Text style={{fontSize:13}}>price</Text>
                
               

                  
{/*                   
                  <Text>
                  {this.props.val.juice}
                 
                  </Text> */}
                  

                  </View>
                  
                  </View>

               
              
              
             
              
            
          
        
        
    );
  }
}

