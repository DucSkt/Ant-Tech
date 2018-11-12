import React, { Component } from 'react';
import { Image , TouchableOpacity} from 'react-native';
import Styles from './Styles';
class ItemButton extends Component {

  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress} >
         <Image style={Styles.image} source={this.props.Image} />
        </TouchableOpacity>
    );
  }
}

export default ItemButton;
