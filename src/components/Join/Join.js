import React, { Component } from "react";
import "./Join.scss";

class Join extends Component {
  constructor(props) {
    super(props);

    this.state={
      number: ''
    }
  }

  render() {
    return (
      <div className="c-join">
        <div className="c-join__wrapper">
          <div className="c-join__wrapper--title">Apply</div>
          <span>2020. 03. 21 ~ 2020. 03. 29</span>
          <div className="c-join__wrapper--first">
            <div className="c-join__wrapper--first__number">
              <span>학번</span>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Join;
