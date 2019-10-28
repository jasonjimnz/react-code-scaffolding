import React from 'react';

import './App.css';
import configureStore from "./configureStore";
import appInitialState from "./reducers/appInitialState";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./views/Home/Home";

const store = configureStore({
  appStore: Object.assign(
    {},
    appInitialState,
    {} //TODO: Your stored redux state
  )
});

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
