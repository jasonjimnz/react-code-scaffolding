import * as types from '../actions/actionTypes';
import appInitialState from "./appInitialState";

export default function applicationReducer(state = appInitialState, action){
  switch (action.type) {
    case types.SEARCH_INPUT_CHANGE:
      return Object.assign(
        {},
        state,
        {
          search: action.searchInput,
          defaultStoreMessage: action.searchInput
        }
      );
    case types.CALL_ERROR:
      return state;
    default:
      return state;
  }
}