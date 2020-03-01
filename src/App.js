import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainContainer from "containers/MainContainer/MainContainer";

const RoutesComponent = () => (
  <Router>
    <Route exact path="/" component={MainContainer} />
    <Switch></Switch>
  </Router>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <RoutesComponent />
      </>
    );
  }
}

export default App;
