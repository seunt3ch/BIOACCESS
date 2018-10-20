import React, { Component } from 'react'
import {View, AsyncStorage} from 'react-native'
import {Button,} from 'react-native-elements';

 class SignInScreen extends Component {

    signIn=async()=>{
        await AsyncStorage.setItem('userToken', "Embash");
        this.props.navigation.navigate('App')
    }
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button  title='Continue Sign in' onPress={this.signIn} />
        </View>
    )
  }
}
export default SignInScreen;
