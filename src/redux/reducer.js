import { combineReducers } from "redux";

const DEFAULT_DOMAINS_TO_CHECK = [
  "passfoo.com",
  "failxx.com",
  "salesforce.com",
  "gmail.com"
];

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

function domains(state = DEFAULT_DOMAINS_TO_CHECK, action) {
  switch (action.type) {
    case "ADD_DOMAIN":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  uptimes,
  domains,
});
