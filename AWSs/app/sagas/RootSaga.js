import { watchFetMusic} from './music/musicSaga';
import {all} from 'redux-saga/effects';
export default function* rootSaga() {
    yield all([
        watchFetMusic()
    ]);
  }
  