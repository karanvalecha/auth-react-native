import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBmDg-67-q2IjioFJjJckscyvkHB4iFDDU",
      authDomain: "auth-react-native-e0764.firebaseapp.com",
      databaseURL: "https://auth-react-native-e0764.firebaseio.com",
      projectId: "auth-react-native-e0764",
      storageBucket: "auth-react-native-e0764.appspot.com",
      messagingSenderId: "1008638104823"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>
          Hello World
        </Text>
      </View>
    );
  }
}

export default App;