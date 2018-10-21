import React, { Component } from 'react'
import { Image,View,StyleSheet } from 'react-native'
import Svg from 'react-native-svg'

class Logo extends Component{
    render(){
        return(
        <View>
            <Image  style={styles.img} source={require('../images/eid.png')} alt='Logo'/>
        </View>
        )
    }
}
export default Logo

const styles = StyleSheet.create({
    img:{
        width: 400,
        height: 200,
      }
})