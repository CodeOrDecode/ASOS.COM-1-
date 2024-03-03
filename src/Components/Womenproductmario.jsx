import React from "react";
import "../Css/Womenproduct.css";
import Navbar from "../Allsimilar/Navbar";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import Footer from "../Allsimilar/Footer";
import { useNavigate } from "react-router-dom";

const Womenproductmario = () => {
  const navigate = useNavigate();

  const data = [
    {
      image:
        "https://images.asos-media.com/products/stradivarius-wide-leg-dad-jean-in-washed-grey/205812480-1-grey?$n_320w$&wid=317&fit=constrain",
      name: "Stradivarius wide leg dad jean in washed grey",
      price: 32,
    },
    {
      image:
        "https://images.asos-media.com/products/monki-zami-high-waist-straight-leg-jeans-in-light-dusty-grey/205498147-1-grey?$n_320w$&wid=317&fit=constrain",
      name: "Monki Zami high waist straight leg jeans in light dusty grey",
      price: 48,
    },
    {
      image:
        "https://images.asos-media.com/products/dr-denim-hill-cargo-low-waist-relaxed-fit-wide-straight-leg-jeans-with-pockets-in-pebble-mid-stone/205535785-1-midblue?$n_320w$&wid=317&fit=constrain",
      name: "Dr Denim Hill cargo low waist relaxed fit wide straight leg jeans with pockets in pebble mid stone",
      price: 74,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-short-sleeve-denim-shirt-dress-in-rinse-wash/205940307-1-darkblue?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN short sleeve denim shirt dress in rinse wash",
      price: 31,
    },

    {
      image:
        "https://images.asos-media.com/products/weekday-arrow-co-ord-low-waist-straight-leg-jeans-with-hem-split-in-sun-bleached-light-blue-wash/205903012-1-washedlightblue?$n_320w$&wid=317&fit=constrain",
      name: "Weekday Arrow co-ord low waist straight leg jeans with hem split in sun bleached light blue wash",
      price: 60,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-denim-crop-shirt-in-rinse-wash/205758774-1-midblue?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN denim crop shirt in rinse wash",
      price: 39,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-curve-baggy-longline-denim-jorts-in-midwash-blue/205729077-1-midblue?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN Curve baggy longline denim jorts in midwash blue",
      price: 27,
    },
    {
      image:
        "https://images.asos-media.com/products/reclaimed-vintage-denim-bandeau-maxi-dress-in-blue-wash/205684101-1-blue?$n_320w$&wid=317&fit=constrain",
      name: "Reclaimed Vintage denim bandeau maxi dress in blue wash",
      price: 77,
    },

    {
      image:
        "https://images.asos-media.com/products/topshop-tilda-jacket-in-bleach/205658536-1-bleach?$n_320w$&wid=317&fit=constrain",
      name: "Topshop Tilda Jacket in bleach",
      price: 82,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-luxe-mid-rise-contour-seam-denim-jean-in-light-wash-blue/205597651-1-blue?$n_320w$&wid=317&fit=constrain",
      name: "ASOS LUXE mid rise contour seam denim jean in light wash blue",
      price: 55,
    },
    {
      image:
        "https://images.asos-media.com/products/collusion-x018-skater-jeans-in-stone/205614662-1-sand?$n_320w$&wid=317&fit=constrain",
      name: "COLLUSION x018 Skater jeans in stone",
      price: 22,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-barrel-leg-jeans-in-light-blue/205058073-1-lightblue?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN barrel leg jeans in light blue",
      price: 24,
    },

    {
      image:
        "https://images.asos-media.com/products/dr-denim-echo-straight-leg-jeans-in-blue-jay/205436431-1-midblue?$n_320w$&wid=317&fit=constrain",
      name: "Dr Denim Echo straight leg jeans in blue jay",
      price: 44,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-wide-leg-pleated-jeans-in-tinted-wash/205718252-1-blue?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN wide leg pleated jeans in tinted wash",
      price: 63,
    },
    {
      image:
        "https://images.asos-media.com/products/stradivarius-petite-wide-leg-dad-jean-in-light-vintage-wash/205710875-1-lightblue?$n_320w$&wid=317&fit=constrain",
      name: "Stradivarius Petite wide leg dad jean in light vintage wash",
      price: 79,
    },
    {
      image:
        "https://images.asos-media.com/products/mango-patchwork-straight-leg-jeans-in-blue/205527353-1-blue?$n_320w$&wid=317&fit=constrain",
      name: "Mango patchwork straight leg jeans in blue",
      price: 66,
    },
  ];

  const [show, setShow] = useState(false);

  const [alldata, setAlldata] = useState(data);

  function handleshow() {
    setShow(!show);
  }

  function handlehide() {
    setShow(false);
  }

  function handlesingleproduct() {
    navigate("/singleproduct");
  }

  return (
    <>
      <Navbar />

      <div className="mainmenproduct">
        <div className="menbannerone">
          <div className="menbenonepart">
            <p className="menbenonepartin">25% OFF SELECTED STYLES!*</p>
            <p className="menbentwopartin">With code: TREATYASELF</p>
          </div>
          <div className="menbentwopart">
            <p className="menbentwopartend">FREE WORLDWIDE DELIVERY</p>
          </div>
        </div>

        <p className="productbrand">Mario Badescu</p>

        <div className="logicimple">
          <div className="logicimpleone">
            <div className="ownownlogic" onClick={handleshow}>
              <div>Sort</div>
              <FaAngleDown />
            </div>
            <div className="ownownlogic">
              <div>Size</div>
              <FaAngleDown />
            </div>
            <div className="ownownlogic">
              <div>Catgory</div>
              <FaAngleDown />
            </div>
            <div className="ownownlogic">
              <div>Product Type</div>
              <FaAngleDown />
            </div>
            <div className="ownownlogic">
              <div>Style</div>
              <FaAngleDown />
            </div>
            <div className="ownownlogic">
              <div>Brand</div>
              <FaAngleDown />
            </div>
          </div>
        </div>

        {show && (
          <div className="logiconefloat" onMouseLeave={handlehide}>
            <div className="floatparts" onClick={handlehide}>
              Recommended
            </div>
            <div className="floatparts" onClick={handlehide}>
              What's new
            </div>
            <div className="floatparts" onClick={handlehide}>
              Price high to low
            </div>
            <div className="floatparts" onClick={handlehide}>
              Price low to high
            </div>
          </div>
        )}

        <div className="productslist">
          {alldata &&
            alldata.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="manprodiv"
                  onClick={handlesingleproduct}
                >
                  <img className="menproimg" src={ele.image} alt="" />
                  <p className="manproname">{ele.name}</p>
                  <p className="manproprice">£{ele.price}</p>
                </div>
              );
            })}
        </div>

        <div className="ruller2"></div>

        <Footer />
      </div>
    </>
  );
};

export default Womenproductmario;
