import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { Button, } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


class WelcomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button title='Sign up' flexDirection='column' onPress={() => this.props.navigation.navigate('SignUp')} />

        <Button title='Sign In' flexDirection='column' containerStyle={styles.signIn}  onPress={() => this.props.navigation.navigate('SignIn')} />
   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#b0bec5',
    
  },
  signIn:{
    width:40,
    fontSize:25,
    marginTop:20,
    paddingHorizontal:18,
    color:'#212121',
    
  }
})
export default WelcomeScreen
