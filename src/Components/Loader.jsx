import React from 'react'
import "../Css/Loader.css"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Loader = () => {
  const navigate = useNavigate();


  function handleconform(){
    navigate("/conformation");
  }

  useEffect(() => {
    setTimeout(() => {
      handleconform();
    }, 5000);
  }, []);

  

  return (
    <div className='loader'>
    
    <img src="https://media.giphy.com/media/5zmWd39AeAzdahsnAV/giphy.gif" alt="" />
    <p className='loadercomprocess'>Processing ......... </p>
    </div>
  )
}

export default Loader