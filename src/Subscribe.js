import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, CheckBox , Dimensions, ScrollView} from 'react-native';
import { Cardimage } from './Cardimage';
import { Card } from 'react-native-elements';
import { CardItem, Body, ListItem, Container, Content, Right } from 'native-base';
// import CheckBox from 'react-native-check-box';

const wid = Dimensions.get('window');

var week=["Monday", "Tuesday", "Wednesday"];

export default class Subscribe extends Component {
    static navigationOptions = {
        title: 'Your Subscriptions',
        header:null,
    }
    constructor(props) {
        super(props);
        this.state={
            check0:true,
            check1:true,
            check2:true,
            check3:true,
            check4:true,
            check5:true,
            check6:true,
        }
        this.state={
            Img: this.props.navigation.state.params.Img,
        }
    }

    CheckBoxTest(data)
    {
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
        else if(data=='check5'){
            this.setState({check5:!this.state.check5})
        }
        else{
            this.setState({check6:!this.state.check6})
        }
    }

    render() {
        return (
        <Container>
            <Content>
            {/* <Card>  
                <CardItem cardBody>
                    <Image source={this.state.Img} style={{height:200, width:wid.width, flex:1, alignSelf:'stretch', resizeMode:'contain'}}/>
                </CardItem>
                </Card> */}
                {/* <Card>
                <CardItem style={{height:300, width:wid.width}}> */}
                <ListItem style={{height:50}}>
                        <CheckBox
                        value={this.state.check0} 
                        onChange={()=>this.CheckBoxTest("check0")}
                        />
                        <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Monday</Text>
                        <View>
                        <Text style={{color:'green', fontSize:15, fontFamily:'normal'}}>Orange Juice</Text>
                        </View>
                        </Body>
                        </ListItem>
                        <ListItem style={{height:50}}>
                        <CheckBox
                        value={this.state.check1} 
                        onChange={()=>this.CheckBoxTest("check1")}
                        />
                        <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Tuesday</Text>
                        <View>
                        <Text style={{color:'green', fontSize:15, fontFamily:'normal'}}>Pomegranate Juice</Text>
                        </View>
                        </Body>
                        </ListItem>
                        <ListItem style={{height:50}}>
                        <CheckBox
                        value={this.state.check2} 
                        onChange={()=>this.CheckBoxTest("check2")}
                        />
                        <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Wednesday</Text>
                        <View>
                        <Text style={{color:'green', fontSize:15, fontFamily:'normal'}}>Wood Apple Juice</Text>
                        </View>
                        </Body>
                        </ListItem>
                        <ListItem style={{height:50}}>
                        <CheckBox
                        value={this.state.check0} 
                        onChange={()=>this.CheckBoxTest("check3")}
                        />
                        <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Thrusday</Text>
                        <View>
                        <Text style={{color:'green', fontSize:15, fontFamily:'normal'}}>Raspberries juice</Text>
                        </View>
                        </Body>
                        </ListItem>
                        <ListItem style={{height:50}}>
                        <CheckBox
                        value={this.state.check1} 
                        onChange={()=>this.CheckBoxTest("check4")}
                        />
                        <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Friday</Text>
                        <View>
                        <Text style={{color:'green', fontSize:15, fontFamily:'normal'}}>Apple juice</Text>
                        </View>
                        </Body>
                        </ListItem>
                        <ListItem style={{height:50}}>
                        <CheckBox
                        value={this.state.check2} 
                        onChange={()=>this.CheckBoxTest("check5")}
                        />
                        <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Saturday</Text>
                        <View>
                        <Text style={{color:'green', fontSize:15, fontFamily:'normal'}}>Lime juice</Text>
                        </View>
                        </Body>
                        </ListItem>
                        <ListItem style={{height:50}}>
                        <CheckBox
                        value={this.state.check2} 
                        onChange={()=>this.CheckBoxTest("check6")}
                        />
                        <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text>Sunday</Text>
                        <View>
                        <Text style={{color:'green', fontSize:15, fontFamily:'normal'}}>asfjdsfk</Text>
                        </View>
                        </Body>
                        </ListItem>
                {/* </CardItem>
            </Card> */}
            </Content>
        </Container>
        );
    }
}
