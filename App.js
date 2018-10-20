/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View,TouchableOpacity} from 'react-native';
import { createSwitchNavigator,
   createStackNavigator,
    createDrawerNavigator,
    createBottomTabNavigator,
   } from 'react-navigation';
import AuthLoadingScreen from './src/Screens/AuthLoadingScreen.js'
import SignInScreen from './src/Screens/SignInScreen.js';
import SignUpScreen from './src/Screens/SignUpScreen.js';
import WelcomeScreen from './src/Screens/WelcomeScreen.js';
import SettingsScreen from './src/Screens/SettingsScreen'
import HomeScreen from './src/Screens/HomeScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './src/Screens/ProfileScreen.js';

const AuthStackNavigator = createStackNavigator({
  Welcome:WelcomeScreen,
  SignIn:SignInScreen,
  SignUp:SignUpScreen,
})

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen:{
    screen:HomeScreen
  },
  SettingsScreen:{
    screen:SettingsScreen
  }
})
const AppStacknavigator = createStackNavigator({

  AppTabNavigator:{
    screen:AppTabNavigator,

    navigationOptions:({navigation})=>({
      title:'E-ID',
      headerRight:(
        <TouchableOpacity onPress={()=>navigation.toggleDrawer()} >
        <View style={{paddingHorizontal:10, backgroundColor:'#ad1457'}}>
          <Icon color="blue" name="md-menu" size={27} />
        </View>
        </TouchableOpacity>
      )
    })
  }
})

const ProfileStackNavigator = createStackNavigator({
  screen: ProfileScreen
})
const AppDrawerNavigator = createDrawerNavigator({
  Home:AppStacknavigator,
  Profile: ProfileStackNavigator
})

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App:AppDrawerNavigator
});
