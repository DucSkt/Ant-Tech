import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from './Styles';
class ProgressBar extends Component {

   static defaultProps = {
    data:'0:00'
   }
  render() {
    const {data} = this.props
    return (
      <View style={Styles.container}>
        <View style={ Styles.viewAll}>
          <View style={Styles.durationLeft}>
            <Text>{data}:00</Text>
          </View>
          <View style={Styles.durationRight}>
            <Text>0:00</Text>
          </View>
        </View>
        <View style={Styles.progress}>
        </View>
      </View>
    );
  }
}

export default ProgressBar;
