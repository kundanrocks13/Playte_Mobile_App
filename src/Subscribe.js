import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, CheckBox , Dimensions} from 'react-native';
import { Cardimage } from './Cardimage';
import { Card } from 'react-native-elements';
import { CardItem, Body, ListItem, Container, Content } from 'native-base';
// import CheckBox from 'react-native-check-box';

const wid = Dimensions.get('window');

var week=["Monday", "Tuesday", "Wednesday"];

export default class Subscribe extends Component {
    static navigationOptions = {
        title: 'Your Subscriptions',
        
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
        // const { navigation } = this.props;
        // const data = navigation.getParam('data', 'no-data');
        return (
        <Container>
            <Content>
            <Card>
                {/* <Text>Subscribe here</Text>
                <Text>{JSON.stringify(data)}</Text> */}
                <CardItem cardBody>
                    <Image source={this.state.Img} style={{height:200, width:wid.width, flex:1, alignSelf:'stretch', resizeMode:'contain'}}/>
                </CardItem>
                </Card>
                <Card>
                {/* <CardItem style={{height:170, width:wid.width}}>
                        <CheckBox
                        value={this.state.check0} 
                        onChange={()=>this.CheckBoxTest("check0")}
                        />
                        <Text>Monday</Text>
                        <CheckBox
                        value={this.state.check1} 
                        onChange={()=>this.CheckBoxTest("check1")}
                        />
                        <Text>Tuesday</Text>
                        <CheckBox
                        value={this.state.check2} 
                        onChange={()=>this.CheckBoxTest("check2")}
                        />
                        <Text>Wednesday</Text>
                        <CheckBox
                        value={this.state.check0} 
                        onChange={()=>this.CheckBoxTest("check3")}
                        />
                        <Text>Thrusday</Text>
                        <CheckBox
                        value={this.state.check1} 
                        onChange={()=>this.CheckBoxTest("check4")}
                        />
                        <Text>Friday</Text>
                        <CheckBox
                        value={this.state.check2} 
                        onChange={()=>this.CheckBoxTest("check5")}
                        />
                        <Text>Saturday</Text>
                        <CheckBox
                        value={this.state.check2} 
                        onChange={()=>this.CheckBoxTest("check6")}
                        />
                        <Text>Sunday</Text>
                </CardItem> */}
            </Card>
            </Content>
        </Container>
        );
    }
}
