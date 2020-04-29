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
          <span className="c-join__wrapper--term">2020. 03. 21 ~ 2020. 03. 29</span>
          <div className="c-join__wrapper--first">
            <div className="c-join__wrapper--first__number">
              <span>학번</span>
              <input></input>
            </div>
            <div className="c-join__wrapper--first__name">
              <span>이름</span>
              <input></input>
            </div>
          </div>

          <div className="c-join__wrapper--second">
            <span>지원분야</span>
            <div className="c-join__wrapper--second__type">
              <button>Design</button>
              <button>Front - End</button>
              <button>Back - End</button>
            </div>
          </div>

          <div className="c-join__wrapper--third">
            <span>지원동기</span>
            <textarea rows="20" cols="30"></textarea>
          </div>

          <button>SEND</button>
        </div>
      </div>
    );
  }
}

export default Join;
