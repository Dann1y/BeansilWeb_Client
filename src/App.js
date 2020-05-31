import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainContainer from "containers/MainContainer/MainContainer";
import TeamContainer from "containers/TeamContainer/TeamContainer";
// import JoinContainer from "containers/JoinContainer/JoinContainer";
// import Signin from "components/Auth/Signin/Signin";
// import Signup from "components/Auth/Signup/Signup";

const RoutesComponent = () => (
  <Router>
    <Route exact path="/" component={MainContainer} />
    <Switch>
      <Route path="/introduce" component={TeamContainer} />
      {/* <Route path="/joinus" component={JoinContainer} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} /> */}
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
