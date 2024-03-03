import React from "react";
import "../Css/Singleproduct.css";
import Navbar from "../Allsimilar/Navbar";
import Footer from "../Allsimilar/Footer";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const Singleproduct = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  function handlehide() {
    setShow(false);
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

      <div className="con">
        <div className="singleproductis">
          <div className="prodetails">
            <img
              src="https://images.asos-media.com/products/asos-design-slim-western-denim-shirt-with-contrast-stitching-in-washed-black/205181023-1-washedblack?$n_320w$&wid=317&fit=constrain"
              alt=""
            />
          </div>

          <div className="extradetails">
            <div className="allitem">
              <p className="extratitle">
                ASOS DESIGN slim western denim shirt with contrast stitching in
                washed black
              </p>
              <p className="extraprice">£27.00</p>
              <div className="existsize" onClick={handleShow}>
                Please select <FaAngleDown />
              </div>

              {show && (
                <div
                  className="allsizeshow"
                  onClick={handleShow}
                  onMouseLeave={handlehide}
                >
                  <div className="indivisize">Please select</div>
                  <div className="indivisize">2XS - Chest 34</div>
                  <div className="indivisize">XS - Chest 36</div>
                  <div className="indivisize">S - Chest 38</div>
                  <div className="indivisize">M - Chest 40</div>
                  <div className="indivisize">L - Chest 42</div>
                  <div className="indivisize">XL - Chest 44</div>
                  <div className="indivisize">2XL - Chest 46-48</div>
                </div>
              )}

              <div className="sinprobutton" style={{cursor:"pointer"}}>ADD TO BAG</div>

              <div className="logooneis">
                <div className="insidecarandpara">
                  <CiDeliveryTruck className="truckone"/>
                  <p className="truckp1">Free delivery on qualifying orders.</p>
                </div>
                <p className="truckp2">View our Delivery &amp; Returns Policy</p>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="rullersingleis"></div>

      <Footer/>
    </>
  );
};

export default Singleproduct;
