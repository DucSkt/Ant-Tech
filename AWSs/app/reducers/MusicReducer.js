import { FETCH_MUSIC,FETCH_MUSIC_SUCESS,FETCH_MUSIC_FAIL } from "../actions/ActionTypes";
    const INIT_STATE = [];
    export default (state = INIT_STATE, action) => {
   //     console.log("dat212a1", action.payload)
        switch (action.type) {
            case FETCH_MUSIC_SUCESS:
                return {...action.payload};          
            default:
                return state;
        }
    }
    