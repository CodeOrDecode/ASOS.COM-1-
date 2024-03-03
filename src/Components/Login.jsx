import React from "react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  function handlesignup(){
    navigate("/signup");
  }

  function handlehome(){
    navigate("/")
  }

  return (
    <>
      <div className="loginimg">
        <img
          src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png"
          alt=""
        />
      </div>

      <div className="mainlogincon">
        <div className="twolinks">
          <div className="twolinkone" onClick={handlesignup}>JOIN</div>
          <div className="twolinkone">SIGN IN</div>
        </div>
        <div className="ruller"></div>

        <div className="formsection">
          <div className="firstform">
            <label>EMAIL ADDRESS : </label>
            <input type="email" />
          </div>
          <div className="secondform">
            <label>PASSWORD : </label>
            <input type="password" />
          </div>

          <div className="buttondivlogin" onClick={handlehome}>SIGN IN</div>
          <p className="forgetone">Forgot password?</p>
          <div className="privacyone">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
