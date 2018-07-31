import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, CheckBox ,
     Dimensions, ScrollView, TouchableOpacity, Modal} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'
import  Cardimage  from './Cardimage';
import { Card } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
// import PopupDialog from 'react-native-popup-dialog';
import { CardItem, Body, ListItem, Container, Content, Right, Button , Left} from 'native-base';
// import CheckBox from 'react-native-check-box';
import Vieworder from './checkout/Vieworder.js';
import Swiper from 'react-native-swiper';
var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
const wid = Dimensions.get('window');
import PopupDialog,  { DialogButton, SlideAnimation, DialogTitle } from 'react-native-popup-dialog';
 


export default class Subscribe extends Component {
    static navigationOptions = {
        title: 'Take your Juice',
        headerStyle: {height: 35, backgroundColor: 'white',
        shadowColor: 'grey',
        borderRadius: 10,
        shadowOpacity: 5,
        margin:8,
        padding:5,
        // titleStyle: { color: 'red' },       for props generate 
    }
    }
    
    constructor(props) {
        super(props);
        this.state={
            Img: this.props.navigation.state.params.Img,
            check0:false,
            check1:false,
            check2:false,
            check3:false,
            check4:false,
            check5:false,
    
            juiceName:"",
            ModalVisible:false,
            chosenDate: "",
            chosenDate1: "",
            // this.setDate = this.setDate.bind(this);
        };
        // this.setDate = this.setDate.bind(this);
    }

    //  setDate(newDate) {
    //     this.setState({ chosenDate: newDate });
    //   }

    
    CheckBoxTest(data)
    {
        console.log(data);
        if(data=='check0'){
            this.setState({check0:!this.state.check0})
        }
        else if(data=='check1'){
            this.setState({check1:!this.state.check1})
        }
        else if(data=='check2'){
            this.setState({check2:!this.state.check2})
        }
        else if(data=='check3'){
            this.setState({check3:!this.state.check3})
        }
        else if(data=='check4'){
            this.setState({check4:!this.state.check4})
        }
        else {
            this.setState({check5:!this.state.check5})
        }
    }

    render() {
        let data = [{
            value: 'Banana',
          }, {
            value: 'Mango',
          }, {
            value: 'Pear',
          }, {
            value: 'Custard Apple',
          }];
        const{navigate}=this.props.navigation;
        return (
        <Container>
            <ScrollView> 
                
                <View style={{margin:5, flexDirection:'row', justifyContent:'space-between'}}>
                    <DatePicker
                        style={{width: 160}}
                        date={this.state.chosenDate}
                        mode="date"
                        placeholder="Start date"
                        format="YYYY-MM-DD"
                        
                        minDate={new Date()}
                        maxDate={new Date(2018, 12, 31)}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 10
                        },
                        dateInput: {
                            marginLeft: 5
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({chosenDate: date})}}
                    />
                    
                    <Text style={{fontSize:20}}>To</Text>
                    
                    <DatePicker
                        style={{width: 160}}
                        date={this.state.chosenDate1}
                        mode="date"
                        placeholder="Finish date"
                        format="YYYY-MM-DD"
                        minDate={this.state.chosenDate}
                        maxDate={new Date(2018, 12, 31)}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 10
                        },
                        dateInput: {
                            marginLeft: 5
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({chosenDate1: date})}}
                    />
                </View>
               
                <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{ height:60.5, width:175, borderBottomColor:'green'}}>
                <CheckBox
                value={this.state.check0} 
                onValueChange={()=>{this.setState({check0:!this.state.check0})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                <Body>
                <Text>Monday</Text>
                </Body>
                </ListItem>
                <View>
                <Dropdown
                    value="Select juice"
                    label='Favorite juice'
                    data={data}
                    containerStyle={{width:150, marginRight:18}}
                    selectedItemColor='#8E44AD'
                    
                    fontSize={15}
                    baseColor='green'
                />
                </View>
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{height:60.5, width:175, borderBottomColor:'green'}}>
                <CheckBox
                value={this.state.check0} 
                onValueChange={()=>{this.setState({check0:!this.state.check0})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Tuesday</Text>
                </Body>
                </ListItem>
                <Dropdown
                    value="Select juice"
                    label='Favorite juice'
                    data={data}
                    containerStyle={{width:150, marginRight:18}}
                    selectedItemColor='#8E44AD'
                    fontSize={15}
                    baseColor='green'
                />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{height:60.5, width:175, borderBottomColor:'green'}}>
                <CheckBox
                value={this.state.check0} 
                onValueChange={()=>{this.setState({check0:!this.state.check0})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Wednesday</Text>
                </Body>
                </ListItem>
                <Dropdown
                    value="Select juice"
                    label='Favorite juice'
                    data={data}
                    containerStyle={{width:150, marginRight:18}}
                    selectedItemColor='#8E44AD'
                    fontSize={15}
                    baseColor='green'
                />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{height:60.5, width:175, borderBottomColor:'green'}}>
                <CheckBox
                value={this.state.check0} 
                onValueChange={()=>{this.setState({check0:!this.state.check0})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Thrusday</Text>
                </Body>
                </ListItem>
                <Dropdown
                    value="Select juice"
                    label='Favorite juice'
                    data={data}
                    containerStyle={{width:150, marginRight:18}}
                    selectedItemColor='#8E44AD'
                    fontSize={15}
                    baseColor='green'
                />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{height:60.5, width:175, borderBottomColor:'green'}}>
                <CheckBox
                value={this.state.check0} 
                onValueChange={()=>{this.setState({check0:!this.state.check0})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Friday</Text>
                </Body>
                </ListItem>
                <Dropdown
                    value="Select juice"
                    label='Favorite juice'
                    data={data}
                    containerStyle={{width:150, marginRight:18}}
                    selectedItemColor='#8E44AD'
                    fontSize={15}
                    baseColor='green'
                />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{height:60.5, width:175, borderBottomColor:'green'}}>
                <CheckBox
                value={this.state.check0} 
                onValueChange={()=>{this.setState({check0:!this.state.check0})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Saturday</Text>
                </Body>
                </ListItem>
                <Dropdown
                    value="Select juice"
                    label='Favorite juice'
                    data={data}
                    containerStyle={{width:150, marginRight:18}}
                    selectedItemColor='#8E44AD'
                    fontSize={15}
                    baseColor='green'
                />
                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{height:60.5, width:175, borderBottomColor:'green'}}>
                <CheckBox
                value={this.state.check0} 
                onValueChange={()=>{this.setState({check0:!this.state.check0})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Sunday</Text>
                </Body>
                </ListItem>
                <Dropdown
                    value="Select juice"
                    label='Favorite juice'
                    data={data}
                    containerStyle={{width:150, marginRight:18}}
                    selectedItemColor='#8E44AD'
                    fontSize={15}
                    baseColor='green'
                />
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Vieworder')}} >
                    <Text style={styles.buttonText}>View Your Orders</Text>
                </TouchableOpacity>

            </ScrollView>
        </Container>
        );
    }
}


var styles = StyleSheet.create({
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    button: {
        backgroundColor: '#8BC34A',
        borderRadius: 3,
        borderTopColor: 'black',
        width: 300,
        height: 40,
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        marginLeft:25
      },
      buttonText: {
        fontWeight:'bold',
        fontSize: 17,
        color:'black',
      }
  })
