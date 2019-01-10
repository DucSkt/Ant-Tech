import React, { Component } from 'react'
import { Text, View , Image} from 'react-native'
import {Images} from '../../../../themes';
import Styles from './styles';

const Header = () =>(
  <View style={Styles.container} >
  <View style={Styles.viewIconAndText}>
    <Image source={Images.back} />
  </View>
  <View style={Styles.viewIconAndText}>
    <Text style={Styles.text}>Trucker Radio</Text>
  </View> 
</View>
)
export default Header