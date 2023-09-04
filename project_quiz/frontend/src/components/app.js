import React, { Component } from "react";
import { render } from "react-dom";
// import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Question from './Question';
import Result from "./result";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/question" component={Question} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
