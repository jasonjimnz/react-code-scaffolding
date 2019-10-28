import {applyMiddleware, compose, createStore} from "redux";
import appReducer from "./reducers";
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";


export default function configureStore(initialState){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  return createStore(
    appReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        reduxImmutableStateInvariant()
      )
    )
  )
}