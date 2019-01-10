import React, { Component } from 'react';
import {
  View, PanResponder, Picker
} from 'react-native';
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
  constructor(props) {
    super(props);
    // this.state={
    //   top:0,
    //   left:0,
    //   dem: 0,
    //   customStyles: {
    //     style:{
    //       top : this.top,
    //       left : this.left,
    //     }
    //   }
    // }

    this.state = {
      language: ''
    }
    this.top = 0,
      this.left = 0,
      this.dem = 0,
      this.view = null,
      this.customStyles = {
        style: {
          top: this.top,
          left: this.left,
        }
      }
  }
  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (event, gestureState) => true,
      onMoveShouldSetPanResponder: (event, gestureState) => true,
      onPanResponderGrant: this.Grant,
      onPanResponderMove: this.Move,
      onPanResponderRelease: this.Release
    })
  }

  

  Release = (event, gestureState) => {
    this.top += gestureState.dy,
      this.left += gestureState.dx
    //  console.log("Release", event )
  }

  Move = (event, gestureState) => {

    this.customStyles.style.top = this.top + gestureState.dy;
    this.customStyles.style.left = 0;
    this.updateNativePropd();
    //  console.log("Move", event )
  }

  updateNativePropd() {
    this.view && this.view.setNativeProps(this.customStyles);
  }

  Grant = (event, gestureState) => {
    //  console.log("grant", event )
  }

  render() {
    const { data } = this.props;
 
    return (
      <View style={{flex:1}} >

     
      <View  ref={view => this.view = view}
      style={Styles.container}
      {...this.panResponder.panHandlers}
       >
        <Header />
        <Song data={data} />
        <ProgressBar data={data.duration} />
        <Button data={data.likes} />

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        
       </View>

          <View  style={{ position: 'absolute', height: 100, width: 300, backgroundColor: 'red' }}  >
          </View>


      </View>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.Music };
}

export default connect(
  mapStateToProps, { fetchMusicApi })(MusicSreen);
