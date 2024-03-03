import React from "react";
import "../Css/Checkout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Checkout = () => {

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

  
  const [checkoutdata, setCheckoutdata] = useState(initialdata);

  function handledata(){
    navigate("/loader");
  }

  return (
    <>
      <div className="checkouth1">
        <img
          src="https://assets.asosservices.com/checkout/3.0.0-f43ec856-175/images/chrome/asos-logo/asos-logo.svg"
          alt=""
        />
        <p>CHECKOUT</p>
      </div>

      <div className="checkoutcon">
        <div className="checkoutcon1">
          <div className="properleft">
            <p className="checkoutleftp1">DELIVERY ADDRESS</p>
            <p className="checkoutleftp2">ADD ADDRESS</p>
            <div className="smalldetaicheck">
              <label className="labelcheckout">FIRST NAME :</label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">LAST NAME :</label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">MOBILE :</label>
              <input type="number" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">ADDRESS :</label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">CITY: </label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">COUNTY :</label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">POSTCODE :</label>
              <input type="number" className="labelcheckoutpin" />
            </div>

            <div className="deliverbutton">DELIVER TO THIS ADDRESS</div>
          </div>
        </div>
        <div className="checkoutcon2">
          {checkoutdata &&
            checkoutdata.map((ele, index) => {
              return (
                <div key={index} className="checkoutlastshow">
                  <div className="ckeckoutimagelast">
                    <img src={ele.image} alt="" />
                  </div>
                  <div className="checkoutconlast">
                    <p className="titlesell1">{ele.title}</p>
                    <p className="titlesell2">Type : {ele.type}</p>
                    <p className="titlesell3">Qty : {ele.qty}</p>
                    <p className="titlesell4">£ {ele.price}</p>
                  </div>
                </div>
              );
            })}

          <div className="checkoutruller" style={{ marginTop: "50px" }}>
            {" "}
          </div>

          <div className="checkoutsubtotal" style={{ marginTop: "20px" }}>
            <p>Subtotal</p>
            <p>£27.00</p>
          </div>
          <div className="totlatopaycheckout" style={{ marginTop: "20px" }}>
            <p>TOTAL TO PAY</p>
            <p>£27.00</p>
          </div>

          <button className="checkoutpaybutton" onClick={handledata}>PAY £27.00</button>
        </div>
      </div>

      <div className="asoshelp">
        <p>ASOS Help</p>
      </div>
    </>
  );
};

export default Checkout;
