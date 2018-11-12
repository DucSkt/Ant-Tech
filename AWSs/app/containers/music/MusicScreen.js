import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './component/header/Header';
import Styles from "./Styles";
import Song from './component/songs/Song';
import { connect } from 'react-redux';
import {fetchMusicApi} from '../../actions/music/MusicAction';
  class MusicSreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
     this.props.fetchMusicApi();
  }

  render() {
    return (
      <View style={{ flex:1 , flexDirection:'column' }} >
          <Header/>    
           <Song/>         
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  };
}

export default connect(
  mapStateToProps,
  { 
    fetchMusicApi
  }
)(MusicSreen);
