import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="c-about">
        <div className="c-about__wrapper">
          <div className="c-about__wrapper--title">ABOUT</div>
          <form className="c-about__wrapper--desc">
            Beansil은 <strong>실무급 웹 프로젝트</strong>를 진행하며 이
            과정속에서 팀원간의 <strong>협업문화</strong>와
            <br />
            소통이 체계적으로 자리잡힌 <strong>학생자치전공동아리</strong>
            입니다.
            <br />
            <br />
            Beansil은 <strong>교내편의시스템</strong>을 시작으로 학교 구성원의
            질 높고 편리한학교생활을 위하여
            <br />늘 발전하는 서비스를 제공합니다 .
          </form>
        </div>
      </div>
    );
  }
}

export default About;
