import React,{Component} from 'react';
import {Text} from 'native-base';
import {StyleSheet, View} from 'react-native';

export default class Profile extends Component{
    render()
    {
        return(
            <View style={styles.container}>
                <Text>
                    my Profile
                </Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})