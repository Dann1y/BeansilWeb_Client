import React, { Component } from "react";
import "./Needs.scss";

class Needs extends Component {
  render() {
    return (
      <div className="c-needs">
        <div className="c-needs__wrapper">
          <div className="c-needs__wrapper--skill">
            <div className="c-needs__wrapper--skill__title">SKILLS</div>
            <div className="c-needs__wrapper--skill__stack">
              <div className="c-needs__wrapper--skill__stack--front">
                <div className="c-needs__wrapper--skill__stack--front__title">
                  Front - End
                </div>
                <div className="c-needs__wrapper--skill__stack--front__circle">
                  <div className="c-needs__wrapper--skill__stack--front__circle--desc">
                    <span>React</span>
                    <span>JavaScript</span>
                  </div>
                </div>
              </div>

              <div className="c-needs__wrapper--skill__stack--back">
                <div className="c-needs__wrapper--skill__stack--back__title">
                  Back - End
                </div>
                <div className="c-needs__wrapper--skill__stack--back__circle">
                  <div className="c-needs__wrapper--skill__stack--back__circle--desc">
                    <span>Node.js</span>
                    <span>Typescript + Koa.js</span>
                    <span>MariaDB</span>
                    <span>Sequelize.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="c-needs__wrapper--req">
              <div className="c-needs__wrapper--req__title">REQUIREMENTS</div>
              <div className="c-needs__wrapper--req__stick"></div>
              <div className="c-needs__wrapper--req__desc">
                  <span>1. '함께'를 잘 생각할 수 있는 사람</span>
                  <span>2. 지금 당장은 못하더라도, 노력할 자신이 있는 사람</span>
                  <span>3. 올바른 인성을 지닌 사람</span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Needs;
