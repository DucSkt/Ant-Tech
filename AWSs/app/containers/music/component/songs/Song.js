import React, { Component } from 'react'
import { Text, View , Image} from 'react-native'
import {Images} from '../../../../themes';
import Styles from './Styles';
export class componentName extends Component {
  render() {
    return (
      <View style={Styles.container} >
          <Image style={Styles.image} source={Images.songs} />
          <Text style={Styles.textTitle1}>Haong VAnssssssssss DUaasdsa</Text>
          <Text style={ Styles.textTitle2}>Haong VAn DUaasdsa</Text>
      </View>
    )
  }
}

export default componentName