import React, { Component } from 'react';
import { View, Text ,Dimensions } from 'react-native';
import Styles from './Styles';
import RowView from './RowView';
class ProgressBar extends Component {

   static defaultProps = {
    data:'0:00'
   }
  render() { 
    const {data} = this.props
    return (
      <View>
        <RowView justifyContent="space-between">
            <Text style={Styles.durationLeft}>0:00</Text>                
            <Text style={Styles.durationRight}>{data}:0</Text>
            </RowView>
        <View style={Styles.progress}>
        </View>
      </View>
    );
  }
}

export default ProgressBar;
