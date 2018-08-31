import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, CheckBox ,
     Dimensions, ScrollView, TouchableOpacity, Modal, Picker} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
// import { Card } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
// import PopupDialog from 'react-native-popup-dialog';
import { CardItem, Body, ListItem, Container, Content, Right, Button , Left, Card, Icon} from 'native-base';
// import CheckBox from 'react-native-check-box';
import Vieworder from './checkout/Vieworder.js';
import { FontAwesome, MaterialIcons, MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';
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
        const date = Date.now();
        this.state={
            noteArray: [],
            // Img: this.props.navigation.state.params.Img,
            check0:false,
            check1:false,
            check2:false,
            check3:false,
            check4:false,
            check5:false,
            check6:false,
            juiceName0:"",
            juiceName1:"",
            juiceName2:"",
            juiceName3:"",
            juiceName4:"",
            juiceName5:"",
            juiceName6:"",
            date: "",
            date1:"",
            message:"aaa",
            a:false
            // date1: `${date1.getDay()}/${date1.getMonth()}/${date1.getYear()}`,
            // this.setDate = this.setDate.bind(this);
        };
        // this.setDate = this.setDate.bind(this);
    }

    //  setDate(newDate) {
    //     this.setState({ chosenDate: newDate });
    //   }

    
    CheckBoxTest()
    {
        
        
        if(this.state.date=="" || this.state.date1=="")
        {
            return false;
        }
        else if(!(this.state.check0 || this.state.check1 || this.state.check2 || this.state.check3 || this.state.check4 || this.state.check5 || this.state.check6))
        {
            return false;
        }
        else if(this.state.check0 || this.state.check1 || this.state.check2 || this.state.check3 || this.state.check4 || this.state.check5 || this.state.check6)
        {
            if(this.state.check0 && this.state.juiceName0!="" || this.state.check1 && this.state.juiceName1!="" || this.state.check2 && this.state.juiceName2!="" || this.state.check3 && this.state.juiceName3!="" || this.state.check4 && this.state.juiceName4!="" || this.state.check5 && this.state.juiceName5!="" || this.state.check6 && this.state.juiceName6!="" )
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return true;
        }
    }

    // senddata(){
    //     this.props.navigation.navigate('Vieworder');
    //     this.sendorder.bind(this);
    // }
     
    sendorder(){
        if(this.state.check0 && this.state.juiceName0)
        this.state.noteArray.push({'check':"Monday",'juice' :this.state.juiceName0 });
        if(this.state.check1 && this.state.juiceName1)
        this.state.noteArray.push({'check':"Tuesday",'juice' :this.state.juiceName1 });
        if(this.state.check2 && this.state.juiceName2)
        this.state.noteArray.push({'check':"Wednesday",'juice' :this.state.juiceName2 });
        if(this.state.check3 && this.state.juiceName3)
        this.state.noteArray.push({'check':"Thrusday",'juice' :this.state.juiceName3 });
        if(this.state.check4 && this.state.juiceName4)
        this.state.noteArray.push({'check':"Friday",'juice' :this.state.juiceName4 });
        if(this.state.check5 && this.state.juiceName5)
        this.state.noteArray.push({'check':"Saturday",'juice' :this.state.juiceName5 });
        if(this.state.check6 && this.state.juiceName6)
        this.state.noteArray.push({'check':"Sunday",'juice' :this.state.juiceName6 });

        this.setState({ noteArray: this.state.noteArray });
        // this.setState({ noteArray: '' });
        // for(var i=0; i<7; i++)
        // {
            
        //     var digit=i;
        //     var name=digit.toString();
        //     var full=`check${name}`;
        //     // console.log(i);
        //     if(full)
        //     this.state.noteArray.push({'check':i});
        //     this.setState({ noteArray: this.state.noteArray })
        // }
            // this.state.noteArray.push({
            //     'check' : "true",
            //     'juice' : ["sfds","sdf"],  
            // });
            // this.setState({ noteArray: this.state.noteArray })
        }

    gotonext(){
        // const data=this.state.noteArray.map(name => {
        //     return name.check;
        // })
        this.scrollView.scrollToEnd()
        // this.props.navigation.navigate('Vieworder')
    }

    render() {
       let vieworders = this.state.noteArray.map((val, key) => {
                         return <Vieworder key={key} keyval={key} val={val}/>
                    });
        
        const{navigate}=this.props.navigation;
        return (
        <Container>
            
            <ScrollView ref={scrollView => this.scrollView = scrollView }> 
                
                <View style={{margin:5, flexDirection:'row', justifyContent:'space-between'}}>
                    <DatePicker
                        style={{width: 160}}
                        date={this.state.date}
                        mode="date"
                        placeholder="Start date"
                        format="DD/MM/YYYY"
                        current={new Date()}
                        minDate={new Date()}
                        maxDate={new Date(2018, 12, 31)}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateText:{
                                color:'blue',
                                fontSize:15
                            },
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
                        onDateChange={(date) => {this.setState({date: date})}}
                    />
                    
                    <Text style={{fontSize:20}}>To</Text>
                    
                    <DatePicker
                        style={{width: 160}}
                        date={this.state.date1}
                        mode="date"
                        placeholder="Finish date"
                        format="DD/MM/YYYY"
                        current={new Date()}
                        minDate={this.state.chosenDate}
                        maxDate={new Date(2018, 12, 31)}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateText:{
                                color:'blue',
                                fontSize:15
                            },
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
                        onDateChange={(date) => {this.setState({date1: date})}}
                    />
                </View>
               
                <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{ height:53, width:175, borderBottomColor:'white', borderBottomWidth:0.1}}>
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
                <Picker
                    selectedValue={this.state.juiceName0}
                    style={{ height: 40, width: 150, margin:8 }}
                    itemStyle={{height: 44,}}
                    onValueChange={(itemValue, itemIndex) => this.setState({juiceName0: itemValue})}>
                    <Picker.Item label="Select Juice" value="" />
                    <Picker.Item label="Custard Apple" value="Custard Apple" />
                    <Picker.Item label="Apple" value="Apple" />
                    <Picker.Item label="Orange" value="Orange" />
                    <Picker.Item label="lemon" value="lemon" />
                </Picker>
                </View>
                <View
                    style={{borderBottomColor:'grey',
                    borderBottomWidth:0.5,}}
                />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{ height:53, width:175, borderBottomColor:'white', borderBottomWidth:0.1}}>
                <CheckBox
                value={this.state.check1} 
                onValueChange={()=>{this.setState({check1:!this.state.check1})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Tuesday</Text>
                </Body>
                
                </ListItem>
                <Picker
                    selectedValue={this.state.juiceName1}
                    style={{ height: 40, width: 150, margin:8 }}
                    itemStyle={{height: 40}}
                    onValueChange={(itemValue, itemIndex) => this.setState({juiceName1: itemValue})}>
                    <Picker.Item label="Select Juice" value="" />
                    <Picker.Item label="Custard Apple" value="Custard Apple" />
                    <Picker.Item label="Apple" value="Apple" />
                    <Picker.Item label="Orange" value="Orange" />
                    <Picker.Item label="lemon" value="lemon" />
                </Picker>
                {/* <Dropdown
                    value="Select juice"
                    label='Favorite juice'
                    data={data}
                    containerStyle={{width:150, marginRight:18}}
                    selectedItemColor='#8E44AD'
                    fontSize={15}
                    baseColor='green'
                /> */}
                </View>
                <View
                    style={{borderBottomColor:'grey',
                    borderBottomWidth:0.5,}}
                />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{ height:53, width:175, borderBottomColor:'white', borderBottomWidth:0.1}}>
                <CheckBox
                value={this.state.check2} 
                onValueChange={()=>{this.setState({check2:!this.state.check2})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Wednesday</Text>
                </Body>
                </ListItem>
                <Picker
                    selectedValue={this.state.juiceName2}
                    style={{ height: 40, width: 150, margin:8 }}
                    itemStyle={{height: 40}}
                    onValueChange={(itemValue, itemIndex) => this.setState({juiceName2: itemValue})}>
                    <Picker.Item label="Select Juice" value="" />
                    <Picker.Item label="Custard Apple" value="Custard Apple" />
                    <Picker.Item label="Apple" value="Apple" />
                    <Picker.Item label="Orange" value="Orange" />
                    <Picker.Item label="lemon" value="lemon" />
                </Picker>
                </View>
                <View
                    style={{borderBottomColor:'grey',
                    borderBottomWidth:0.5,}}
                />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{ height:53, width:175, borderBottomColor:'white', borderBottomWidth:0.1}}>
                <CheckBox
                value={this.state.check3} 
                onValueChange={()=>{this.setState({check3:!this.state.check3})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Thrusday</Text>
                </Body>
                </ListItem>
                <Picker
                    selectedValue={this.state.juiceName3}
                    style={{ height: 40, width: 150, margin:8 }}
                    itemStyle={{height: 40}}
                    onValueChange={(itemValue, itemIndex) => this.setState({juiceName3: itemValue})}>
                    <Picker.Item label="Select Juice" value="" />
                    <Picker.Item label="Custard Apple" value="Custard Apple" />
                    <Picker.Item label="Apple" value="Apple" />
                    <Picker.Item label="Orange" value="Orange" />
                    <Picker.Item label="lemon" value="lemon" />
                </Picker>
                </View>
                <View
                    style={{borderBottomColor:'grey',
                    borderBottomWidth:0.5,}}
                />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{ height:53, width:175, borderBottomColor:'white', borderBottomWidth:0.1}}>
                <CheckBox
                value={this.state.check4} 
                onValueChange={()=>{this.setState({check4:!this.state.check4})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Friday</Text>
                </Body>
                </ListItem>
                <Picker
                    selectedValue={this.state.juiceName4}
                    style={{ height: 40, width: 150, margin:8 }}
                    itemStyle={{height: 40}}
                    onValueChange={(itemValue, itemIndex) => this.setState({juiceName4: itemValue})}>
                    <Picker.Item label="Select Juice" value="" />
                    <Picker.Item label="Custard Apple" value="Custard Apple" />
                    <Picker.Item label="Apple" value="Apple" />
                    <Picker.Item label="Orange" value="Orange" />
                    <Picker.Item label="lemon" value="lemon" />
                </Picker>
                </View>
                <View
                    style={{borderBottomColor:'grey',
                    borderBottomWidth:0.5,}}
                />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{ height:53, width:175, borderBottomColor:'white', borderBottomWidth:0.1}}>
                <CheckBox
                value={this.state.check5} 
                onValueChange={()=>{this.setState({check5:!this.state.check5})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Saturday</Text>
                </Body>
                </ListItem>
                <Picker
                    selectedValue={this.state.juiceName5}
                    style={{ height: 40, width: 150, margin:8 }}
                    itemStyle={{height: 40}}
                    onValueChange={(itemValue, itemIndex) => this.setState({juiceName5: itemValue})}>
                    <Picker.Item label="Select Juice" value="" />
                    <Picker.Item label="Custard Apple" value="Custard Apple" />
                    <Picker.Item label="Apple" value="Apple" />
                    <Picker.Item label="Orange" value="Orange" />
                    <Picker.Item label="lemon" value="lemon" />
                </Picker>
                </View>
                <View
                    style={{borderBottomColor:'grey',
                    borderBottomWidth:0.5,}}
                />

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <ListItem style={{ height:53, width:175, borderBottomColor:'white', borderBottomWidth:0.1}}>
                <CheckBox
                value={this.state.check6} 
                onValueChange={()=>{this.setState({check6:!this.state.check6})}}
                />
                {/* {
                    this.state.check0? this.popupDialog.show():null
                } */}
                
                <Body>
                <Text>Sunday</Text>
                </Body>
                </ListItem>
                <Picker
                    selectedValue={this.state.juiceName6}
                    style={{ height: 40, width: 150, margin:8 }}
                    itemStyle={{height: 40}}
                    onValueChange={(itemValue, itemIndex) => this.setState({juiceName6: itemValue})}>
                    <Picker.Item label="Select Juice" value="" />
                    <Picker.Item label="Custard Apple" value="Custard Apple" />
                    <Picker.Item label="Apple" value="Apple" />
                    <Picker.Item label="Orange" value="Orange" />
                    <Picker.Item label="lemon" value="lemon" />
                </Picker>
                </View>
                <View
                    style={{borderBottomColor:'grey',
                    borderBottomWidth:0.5,}}
                />

                <TouchableOpacity style={styles.button} onPress={() => {
                    this.sendorder();
                    this.CheckBoxTest()?

                    // this.props.navigation.navigate('Vieworder',{check:["kundan","kumar","singh"], date:23434, juice:"sdafdf"})

                    this.gotonext()
                    :
                    alert("Select date and Choose your Favourite juice")
                }} >
                    <Text style={styles.buttonText}>View Your Orders</Text>
                </TouchableOpacity>
                {/* <Card style={{marginBottom:40}}>
                <CardItem>
              <Text>Your juice plan</Text>
              </CardItem>
                <View style={{flex:3, flexDirection:'row', justifyContent: 'center' }}>
                <CardItem style={{flex:1}}>
                <Text>Day/s</Text> 
                </CardItem>
                <CardItem style={{flex:1, margin:10}}>
                <Text>Jucie name</Text>
                </CardItem>
                <CardItem style={{flex:1}}>
                <Text>Price</Text>
                </CardItem>
                </View>
                
              
              <CardItem> */}
              <View style={{margin:10, flex:1, width: 340, height: 250, backgroundColor: 'powderblue', borderColor:'black',borderWidth:0.5}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:17,paddingRight:17,paddingTop:10}}>
              <Text >Days</Text>
              <Text>Juice's Name</Text>
              <Text>Price</Text>
              
              </View>
              <View style={styles.linestyle}/>
              <View>
              
              {vieworders}
             
              </View>
              <View style={styles.linestyle}/>
              
              
              <Button iconLeft style={{marginBottom:10, marginLeft:200, backgroundColor: '#8BC34A', height:40,alignSelf:'flex-end',position:'absolute',bottom:1,right:1 }}>
                <FontAwesome name='rupee' size={25} style={{margin:8}} />
                {/* <Button bordered success style={{marginBottom:10, marginLeft:90 }}> */}
                    <Text style={{margin:8}} onPress={()=>{this.props.navigation.navigate('payment')}}>Proceed To pay</Text>
                </Button>
              </View>
             
              {/* </CardItem>
              <CardItem>
              <Text>SubTotal</Text>
              </CardItem> */}
                
              {/* </Card> */}

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
      },
      linestyle: {
        borderWidth: 0.5,
        borderColor:'red',
        marginLeft:15,
        marginRight:15, 
        marginBottom:10,
        marginTop:10,
      }
  })
