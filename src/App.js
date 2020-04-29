import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainContainer from "containers/MainContainer/MainContainer";
import TeamContainer from "containers/TeamContainer/TeamContainer";
import JoinContainer from "containers/JoinContainer/JoinContainer";

const RoutesComponent = () => (
  <Router>
    <Route exact path="/" component={MainContainer} />
    <Switch>
      <Route path="/introduce" component={TeamContainer} />
      <Route path="/joinus" component={JoinContainer} />
    </Switch>
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
