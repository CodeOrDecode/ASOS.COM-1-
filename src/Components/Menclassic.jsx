import React from "react";
import "../Css/Menproduct.css";
import Navbar from "../Allsimilar/Navbar";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import Footer from "../Allsimilar/Footer";
import { useNavigate } from "react-router-dom";

const Menclassic = () => {
  const navigate = useNavigate();

  const data = [
    {
      image:
        "https://images.asos-media.com/products/calvin-klein-jeans-badge-logo-skater-denim-jacket-in-dark-wash/205437446-1-denimdark?$n_320w$&wid=317&fit=constrain",
      name: "Calvin Klein Jeans badge logo skater denim jacket in dark wash",
      price: 172,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-slim-western-denim-shirt-with-contrast-stitching-in-stone/205332278-2?$n_640w$&wid=634&fit=constrain",
      name: "ASOS DESIGN slim western denim shirt with contrast stitching in stone",
      price: 20,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-super-oversized-denim-jacket-in-dark-wash-blue/204826662-1-tintedblue?$n_640w$&wid=634&fit=constrain",
      name: "ASOS DESIGN super oversized denim jacket in dark wash blue",
      price: 48,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-slim-western-denim-shirt-with-contrast-stitching-in-washed-black/205181023-1-washedblack?$n_640w$&wid=634&fit=constrain",
      name: "ASOS DESIGN slim western denim shirt with contrast stitching in washed black",
      price: 27,
    },

    {
      image:
        "https://images.asos-media.com/products/asos-design-oversized-denim-harrington-jacket-with-pu-collar-in-washed-black/205263647-1-black?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN oversized denim harrington jacket with PU collar in washed black",
      price: 58,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-double-pocket-denim-overshirt-in-dark-blue-wash/205489918-1-darkbluewash?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN double pocket denim overshirt in dark blue wash",
      price: 30,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-boxy-oversized-denim-shirt-in-cobalt/205332235-1-cobaltblue?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN boxy oversized denim shirt in cobalt",
      price: 37,
    },
    {
      image:
        "https://images.asos-media.com/products/levis-trucker-denim-jacket-in-light-blue-wash/204693304-1-alwaysbetter?$n_320w$&wid=317&fit=constrain",
      name: "Levi's Trucker denim jacket in light blue wash",
      price: 80,
    },

    {
      image:
        "https://images.asos-media.com/products/asos-design-90s-oversized-shirt-with-patch-pockets-in-black-spray-wash/205182763-1-blackwash?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN 90s oversized shirt with patch pockets in black spray wash",
      price: 30,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-overshirt-with-extended-pockets-in-lilac-wash/205332244-1-redwash?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN overshirt with extended pockets in lilac wash",
      price: 42,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-relaxed-denim-shirt-in-dark-green/205259264-1-green?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN relaxed denim shirt in dark green",
      price: 53,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-skinny-fit-western-denim-shirt-in-green/205195050-1-khaki?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN skinny fit western denim shirt in green",
      price: 49,
    },

    {
      image:
        "https://images.asos-media.com/products/asos-design-co-ord-cropped-boxy-harrington-jacket-in-bleached-ecru/205666514-1-ecru?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN co-ord  cropped boxy Harrington jacket in bleached ecru",
      price: 35,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-relaxed-boxy-denim-jacket-in-washed-black/205663071-1-washedblack?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN relaxed boxy denim jacket in washed black",
      price: 42,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-stretch-slim-jeans-with-abrasions-in-washed-black/205112017-1-washedblack?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN stretch slim jeans with abrasions in washed black",
      price: 26,
    },
    {
      image:
        "https://images.asos-media.com/products/asos-design-straight-leg-jeans-with-cargo-pockets-in-washed-black/205489554-1-washedblack?$n_320w$&wid=317&fit=constrain",
      name: "ASOS DESIGN straight leg jeans with cargo pockets in washed black",
      price: 23,
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

          <p className="productbrand">Classic styles</p>

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
                  <div key={index} className="manprodiv" onClick={handlesingleproduct}>
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
    </>
  );
};

export default Menclassic;
