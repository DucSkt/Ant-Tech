import React, { Component } from 'react';
import { View, Text,Image , TouchableOpacity} from 'react-native';
import {Images} from '../../../../themes'
import ButtonItem from './buttonItem';
import Styles from './Styles';
class Button extends Component {
  static defaultProps = {
    data: 0
   }
  render() { 
    const { data } = this.props
    return (
      <View style={Styles.container} >
         <ButtonItem Image={Images.previous}> </ButtonItem>
         <ButtonItem Image={Images.play}> </ButtonItem>
         <ButtonItem Image={Images.next}> </ButtonItem>
         <ButtonItem Image={Images.like}> </ButtonItem>
         <Text>{data}</Text>
      </View>
    );
  }
}

export default Button;
