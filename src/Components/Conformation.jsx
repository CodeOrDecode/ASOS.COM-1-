import React from "react";
import "../Css/Conformation.css";
import { useNavigate } from "react-router-dom";

const Conformation = () => {

  const navigate = useNavigate();

  function handlehome(){
    navigate("/")
  }


  return (
    <div className="conformationdiv">
      <p className="conforp1">THANK YOU!</p>
      <img
        className="conforimg"
        src="https://th.bing.com/th/id/R.f0a316071ef6c5da4fdd244bc3dde58b?rik=pz0NLXMehVkKEg&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgreen-check-mark-icon-transparent-background%2fgreen-check-mark-icon-transparent-background-15.png&ehk=2zUIFlkIfeZ3iIu21O%2fe8Q2zELymkpJFLR2OsoVZZsQ%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <p className="conforp2">
        Your coupon is on its way to your email. But first ...
      </p>
      <p className="conforp3" style={{cursor:"pointer"}}>
        Click here to book Your appointment online instantly. It only takes a
        minute
      </p>
      <p className="conforp4">We can't wait to meet you and your do!</p>

      <button className='fournotfourbutton' style={{background:"green",fontWeight:"bold"}}  onClick={handlehome}>HOME</button>
    </div>
  );
};

export default Conformation;
