import { FETCH_MUSIC ,FETCH_MUSIC_FAIL,FETCH_MUSIC_SUCESS} from '../../actions/ActionTypes';
import Data from '../API'; 
import {fetchMusicApiSucess} from '../../actions/music/MusicAction';
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';

function* fetMusicApi() {
    const data = yield call(Data);
    if(data)
    yield put(fetchMusicApiSucess(data));
}

export function* watchFetchLanguage() {
  yield takeLatest(FETCH_MUSIC, fetMusicApi);
}
