import React, { Component } from 'react';
import { View } from 'react-native';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';

class App extends Component {
  state = { loggedIn: null, initializedFirebase: false }

  componentWillMount() {
    if(!this.state.initializedFirebase){
      firebase.initializeApp({
        apiKey: "AIzaSyBmDg-67-q2IjioFJjJckscyvkHB4iFDDU",
        authDomain: "auth-react-native-e0764.firebaseapp.com",
        databaseURL: "https://auth-react-native-e0764.firebaseio.com",
        projectId: "auth-react-native-e0764",
        storageBucket: "auth-react-native-e0764.appspot.com",
        messagingSenderId: "1008638104823"
      })
    }

    this.setState({initializedFirebase: true})

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true})
      } else {
        this.setState({loggedIn: false})
      }
    })
  }

  renderLogOut() {
    return(
      <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
          Log Out
        </Button>
      </CardSection>
    )
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return this.renderLogOut()
      case false: 
        return <LoginForm />
      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;