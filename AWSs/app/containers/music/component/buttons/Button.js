import React, { Component } from 'react';
import { View, Text,Image , TouchableOpacity} from 'react-native';
import {Images} from '../../../../themes'
import ButtonItem from './buttonItem';
import Styles from './Styles';
class Button extends Component {
  static defaultProps = {
    data: 0
   }
   onClickPrevious = ()=> {
     alert("Previous");
   }
   onClickNext = ()=> {
    alert("Next");
  }
  onClickPlay = ()=> {
    alert("Play");
  }
  render() { 
    const { data } = this.props
    return (
      <View style={Styles.container} >
         <ButtonItem Image={Images.previous} onPress={this.onClickPrevious}> </ButtonItem>
         <ButtonItem Image={Images.play} onPress={this.onClickPlay}> </ButtonItem>
         <ButtonItem Image={Images.next} onPress={this.onClickNext}> </ButtonItem>
         <ButtonItem Image={Images.like}> </ButtonItem>
         <Text>{data}</Text>
      </View>
    );
  }
}

export default Button;
