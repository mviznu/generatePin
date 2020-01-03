import { ADD_PIN, DELETE_PIN, UPDATE_PIN_NAME } from "../constants/action-types";

const initialState = {
  savedPins: []
};

function rootReducer(state = initialState, action) {
  
  if (action.type === ADD_PIN) {
    let filtered = state.savedPins.filter(function(el) { return el; });
    return ({}, state, {
        savedPins: filtered.concat([action.payload])
    });
  }

  if (action.type === UPDATE_PIN_NAME) {
    //not required to return
    //reducer is already updating the state
    //uncomment it to see the updated chnages in console
    //let updateItem = [...state.savedPins.filter(item => item[0] === action.payload[0])];
    //console.log(updateItem);
  }

  if (action.type === DELETE_PIN) {
    return ({ ...state,
      savedPins: [...state.savedPins.filter(item => item !== action.payload)],
    })
  }

  return state;
}

export default rootReducer;