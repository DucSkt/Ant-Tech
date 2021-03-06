import React, { Component } from 'react'
import { Text, View ,      Image} from 'react-native'
import Styles from './Styles';
// import FastImage from 'react-native-fast-image'
export class Song extends Component {
  render() {
    return (
      <View style={Styles.container} >
          <Image style={Styles.image}
           source={{uri :this.props.data.cover}}
       />
          <Text style={Styles.textTitle1}>{this.props.data.title}</Text>
          <Text style={ Styles.textTitle2}>{this.props.data.artist}</Text>
      </View>
    )
  }
}

export default Song