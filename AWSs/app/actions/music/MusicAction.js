import {FETCH_MUSIC , FETCH_MUSIC_SUCESS ,FETCH_MUSIC_FAIL } from '../ActionTypes'

export const fetchMusicApi = ()=> {
    return {
        type : FETCH_MUSIC,
        payload : []
    }
}   
         
export const fetchMusicApiSucess = (data)=> {
    return {
        type : FETCH_MUSIC_SUCESS,
        payload : data
    }
}   