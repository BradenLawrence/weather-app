import { GET_WEATHER } from "../actions/index";

const weatherReducer = (state = [], action) => {
        switch (action.type) {
            // The ... spread operator takes all of the items currently in state and 'spread's them out into new items in this new array.
            case GET_WEATHER: {
                if(action.error){
                    return state
                }
                return [ action.payload.data, ...state ]
            } 
        }
    return state
}

export { weatherReducer }