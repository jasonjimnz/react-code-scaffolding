import * as types from './actionTypes';

export function textInputActionCallback(searchInput){
  return {type: types.SEARCH_INPUT_CHANGE, searchInput}
}

export function textInputAction(textInput){
  return function(dispatch){
    dispatch(textInputActionCallback(textInput.value));
  }
}