import types from '../actions/actionTypes';

let initialState = {
    data = {}
}

export default function( state = initialState, action){
    switch (action.type) {
        case types.ADD_TO_FAVORITES:
            return { ...state, data: action.payload }
            default :
                return { ...state }
    }
}