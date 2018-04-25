import types from './actionTypes';
import store from '../store';

const { dispatch } = store;

export function addToFavorites( payload ){
    return dispatch({
        type : types.ADD_TO_FAVORITES,
        payload : res
    })
}