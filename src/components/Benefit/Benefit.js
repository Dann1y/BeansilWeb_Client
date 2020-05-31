import React, { Component } from "react";
import "./Benefit.scss";

import { ReactComponent as Skillful } from "assets/Skillful.svg";
import { ReactComponent as Together } from "assets/Together.svg";
import { ReactComponent as Experience } from "assets/Experience.svg";
import { ReactComponent as Arrow } from "assets/Arrow.svg";

class Benefit extends Component {
  render() {
    return (
        <div className="c-benefit">
          <div className="c-benefit__wrapper">
            <div className="c-benefit__wrapper--beansil">
              BENEFITS OF BEANSIL
            </div>
            <div className="c-benefit__wrapper--desc">
              <div className="c-benefit__wrapper--desc__box">
                <Skillful />
                <div className="c-benefit__wrapper--desc__box--title">
                  Skillful
                </div>
                <div className="c-benefit__wrapper--desc__box--content">
                  기초 맛보기 수준이 아닌, 실무에 쓰이는
                  <br /> 기술들을 바탕으로 프로젝트를 진행합니다.
                </div>
              </div>
              <div className="c-benefit__wrapper--desc__box">
                <Together />
                <div className="c-benefit__wrapper--desc__box--title">
                  Together
                </div>
                <div className="c-benefit__wrapper--desc__box--content">
                  함께 규칙을 정해서 규칙을 지켜가며
                  <br /> 자유롭게 협업하며, 혼자가 아닌
                  <br /> 모두가 발전해나갑니다.
                </div>
              </div>
              <div className="c-benefit__wrapper--desc__box">
                <Experience />
                <div className="c-benefit__wrapper--desc__box--title">
                  Experience
                </div>
                <div className="c-benefit__wrapper--desc__box--content">
                  선취업한 선배님들이 후배에게 실무경험을
                  <br /> 간접적으로 공유함으로써
                  <br /> 실무에 더욱 가까워질 수 있습니다.
                </div>
              </div>
            </div>

            <Arrow />

            <div className="c-benefit__wrapper--dev">
              <div className="c-benefit__wrapper--dev__title">Development</div>
              <div className="c-benefit__wrapper--dev__desc">
                자신의 능력을 개발할 수 있습니다.
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Benefit;
