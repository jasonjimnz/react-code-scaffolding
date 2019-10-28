import React from 'react';
import {connect} from 'react-redux';
import logo from "../../logo.svg";
import {textInputAction} from "../../actions/textInputAction";

const Home = ({appStore, textInputAction, ...props}) => {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <p>
        This is a scaffolding React Application with React-Redux, Superagent and Bootstrap
      </p>
      <p>
        {appStore.defaultStoreMessage}
      </p>
      <div style={{width: "80%"}}>
        <input
          style={{width: "80%", fontSize: '1.2em'}}
          type="text"
          placeholder={"Change text to be shown in the upper P element"}
          onChange={(e) => {
            textInputAction({value: e.target.value})
          }}/>
      </div>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
}

function mapStateToProps(state, props) {
  return {
    appStore: state.appStore
  }
}

const mapDispatchToProps = {
  textInputAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
