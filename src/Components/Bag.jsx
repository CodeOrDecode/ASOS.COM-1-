import React from "react";
import { useState } from "react";
import Navbar from "../Allsimilar/Navbar";
import Footer from "../Allsimilar/Footer";
import "../Css/Bag.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Bag = () => {

  const navigate = useNavigate();


  let initialdata = [
    {
      image:
        "https://images.asos-media.com/products/asos-design-slim-western-denim-shirt-with-contrast-stitching-in-washed-black/205181023-1-washedblack?$n_320w$&wid=317&fit=constrain",
      title:
        "ASOS DESIGN slim western denim shirt with contrast stitching in washed black",
      price: 27,
      type: "XL",
      qty: 1,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-co-ord-cropped-boxy-harrington-jacket-in-bleached-ecru/205666514-1-ecru?$n_320w$&wid=317&fit=constrain",
      title:
        "ASOS DESIGN slim western denim shirt with contrast stitching in washed black",
      price: 27,
      type: "XL",
      qty: 1,
    },
  ];

  const [bagdata, setBagdata] = useState(initialdata);

  function handlecheckout(){
    navigate("/Checkout")
  }
  return (
    <>
      <Navbar />

      <div className="menbannerone">
        <div className="menbenonepart">
          <p className="menbenonepartin">25% OFF SELECTED STYLES!*</p>
          <p className="menbentwopartin">With code: TREATYASELF</p>
        </div>
        <div className="menbentwopart">
          <p className="menbentwopartend">FREE WORLDWIDE DELIVERY</p>
        </div>
      </div>

      <div className="bagmaincon">
        <div className="bagmainconone">
          <p className="bagpone">MY BAG</p>
          {bagdata &&
            bagdata.map((ele, index) => {
              return (
                <div key={index} className="bagdatadiv">
                  <img src={ele.image} alt="" className="bagimageis" />
                  <div className="bagdescription">
                    <p className="bagalltags additionclass">{ele.title}</p>
                    <p className="bagalltags">Type : {ele.type}</p>
                    <p className="bagalltags additionclass">Qty : {ele.qty}</p>
                    <p className="bagalltags">£ {ele.price}</p>
                    <div className="plusminus">
                      <FaPlusCircle  className="ihavetodoit"/>
                      <FaMinusCircle  className="ihavetodoit"/>
                      <CiCircleRemove  className="ihavetodoit"/>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="bagmaincontwo">
        <p className="totlabagis">TOTAL</p>
        <div className="bagruller"></div>
        <div className="subpricebagone">
            <p className="bagsubtext">Sub-total</p>
            <p className="bagpricetext">£ 27.00</p>
        </div>

        <div className="bagcheckoutbutton" onClick={handlecheckout}>CHECKOUT</div>
        <p className="totlabagisaccept">WE ACCEPT:</p>
        <img style={{width:"190px",marginLeft:"44px"}} src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="" />
        </div>
      </div>


      <Footer/>
    </>
  );
};

export default Bag;
