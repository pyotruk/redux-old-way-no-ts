import { combineReducers } from "redux";

const DEFAULT_DOMAINS_TO_CHECK = [
  "passfoo.com",
  "failxx.com",
  "salesforce.com",
  "gmail.com"
];

const initialState = Object.fromEntries(DEFAULT_DOMAINS_TO_CHECK.map(domain => [domain, { domain }]));

function uptimes(state = initialState, action) {
  switch (action.type) {
    case "SET_UPTIME":
      return {
        ...state,
        [action.payload.data.domain]: action.payload.data
      };
    case "ADD_DOMAIN":
      return {
        ...state,
        [action.payload]: {domain: action.payload}
      };
    default:
      return state;
  }
}

export default combineReducers({
  uptimes
});
