import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import {Button} from 'react-native-elements'
export class SettingsScreen extends Component {

  signOut = async()=>{
    AsyncStorage.clear(),
    this.props.navigation.navigate('AuthLoading')
      
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Sign Out"  onPress={this.signOut}/>
      </View>
    )
  }
}

export default SettingsScreen
