import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress() {
    this.setState({error: '', loading: true})
    const { email, password } = this.state;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this)).
      catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password).
          then(this.onLoginSuccess.bind(this)).
          catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    })
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            placeholder="user@gmail.com"
            autoCorrect={false}
            onChangeText={email => this.setState({email})}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            value={this.state.password}
            placeholder="password"
            onChangeText={password => this.setState({password})}
          />
        </CardSection>


        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;