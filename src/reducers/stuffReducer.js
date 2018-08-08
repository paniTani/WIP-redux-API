import initialState from './initialState';
import {FETCH_STUFF, RECEIVE_STUFF, SEARCH_BY_ITEM} from '../actions/actionTypes';

export default function stuff(state = initialState.stuff, action) {
    let newState;
    switch (action.type) {
        case FETCH_STUFF:
            console.log('FETCH_STUFF Action')
            return action;
        case RECEIVE_STUFF:
            newState = action.stuff;
            console.log('RECEIVE_STUFF Action')
            return newState;
        case SEARCH_BY_ITEM:
            newState = action.value;
            return  newState;
        default:
            return state;
    }
}