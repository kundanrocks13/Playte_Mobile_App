import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

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
  render() {
    return (
      <Container>
        {/* <Header /> */}
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Your juice plan</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>SubTotal</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}