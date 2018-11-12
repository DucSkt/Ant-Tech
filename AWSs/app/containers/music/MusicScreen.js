import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './component/header/Header';
import Styles from "./Styles";
import Song from './component/songs/Song';
import { connect } from 'react-redux';
import { fetchMusicApi } from '../../actions/music/MusicAction';
import ProgressBar from './component/progressbar/ProgressBar';
import Button from './component/buttons/Button';
class MusicSreen extends Component {

  componentDidMount() {
    this.props.fetchMusicApi();
  }

  render() {
    const { data } = this.props;
    console.log("skt", data)
    return (
      <View style={Styles.container} >
        <Header/>
        <Song data={data} />
        <ProgressBar data={data.duration}/>
        <Button data={data.likes} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.Music };
}

export default connect(
  mapStateToProps, { fetchMusicApi } )(MusicSreen);
