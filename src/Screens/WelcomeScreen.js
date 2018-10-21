import React, { Component } from 'react'
import { View,
   StyleSheet,
  StatusBar,
  Image } from 'react-native';
import {  Button as Btn, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../component/Button'

class WelcomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.imageSection}>
      <Image  style={styles.img} source={require('../images/ID.png')}/>
      </View>
      <StatusBar 
        backgroundColor="#1c313a"
        barStyle ="light-content"/>

        <View style={styles.logginButtonSection}>
          <Button title='Sign up' onPress={() => this.props.navigation.navigate('SignUp')}  />
          <Button style={styles.transparentButton} title='Sign In' onPress={() => this.props.navigation.navigate('SignIn')} />
        </View>
      </View>     
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection:  'column',
    backgroundColor: '#00363a',
  },
  backgroundColor:{
    backgroundColor:'#b71c1c',
  },

  img:{
    width: 200,
    height: 100,
  },
  logginButtonSection: {
    width: '90%',
    fontSize: 25,
    marginLeft: '5%',
    
  },
  transparentButton:{
    backgroundColor: 'transparent',
},

imageSection:{
  marginTop: '40%',
  alignItems: 'center',
}
})
export default WelcomeScreen
