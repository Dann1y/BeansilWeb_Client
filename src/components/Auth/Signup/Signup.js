import React from 'react'
import "./Signup.scss";

import { ReactComponent as Logo } from "assets/LOGO.svg";
import { ReactComponent as Close } from "assets/Close.svg";

const Signup = ({ onClose }) => {
  return (
    <div className="c-signup">
        <div className="c-signup__wrapper">
          <div className="c-signup__wrapper--wrap1">
              <Logo className="logo" />
              <Close className="close" onClick={onClose} />
          </div>
          <div className="c-signup__wrapper--wrap2">
            <input className="id" placeholder="ID" type="id" />
            <input
              className="password"
              placeholder="Password"
              type="password"
            />
            <input
              className="repassword"
              placeholder="Re-Password"
              type="repassword"
            />
            <button type="submit">Register</button>
          </div>
        </div>
      </div>
  )
}


export default Signup;
