import { Provider } from 'react-redux';
import React, { Component } from 'react';
 import Music from '../music/MusicScreen';
 import store from '../../store';
class App extends Component {
 
 
  render() {
    return (
      <Provider store={store}>
        <Music />
      </Provider>
    );
  }


}

export default App;
