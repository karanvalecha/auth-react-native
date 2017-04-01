import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Card, CardSection, Button } from './components/common';
import {firebase } from 'firebase';

class App extends Component {
  render () {
    return (
    	<View>
        <Header headerText={"Hey there"}/>
    	</View>
    )
  }
}

export default App;