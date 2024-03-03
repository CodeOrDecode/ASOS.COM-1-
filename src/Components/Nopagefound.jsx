import React from 'react'
import "../Css/Nopagefound.css"
import { useNavigate } from "react-router-dom";

const Nopagefound = () => {

  const navigate = useNavigate();


  function handlehome(){
    navigate("/")
  }

  return (
    <div className='notfoundpage'>
    <p className='fournotfourp1'>404</p>
    <p className='fournotfourp2'>Error - Page Not Found</p>
    <button className='fournotfourbutton' onClick={handlehome}>HOME</button>
    
    </div>
  )
}

export default Nopagefound