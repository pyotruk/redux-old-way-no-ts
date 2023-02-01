import { combineReducers } from "redux";

function uptimes(state = {}, action) {
  switch (action.type) {
    case "SET_UPTIME":
      return {
        ...state,
        [action.payload.data.domain]: action.payload.data
      };
    default:
      return state;
  }
}

export default combineReducers({
  uptimes
});
