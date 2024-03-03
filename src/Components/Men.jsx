import React from "react";
import "../Css/Men.css";
import Navbar from "../Allsimilar/Navbar";
import ReactPlayer from "react-player";
import Footer from "../Allsimilar/Footer"
import { useNavigate } from "react-router-dom";

const Men = () => {
  const navigate = useNavigate();



  function handledeneim(){
    navigate("/menproductdenim");
  }

  function handlespring(){
    navigate("/menproductspring");
  }


  function handletommy(){
    navigate("/menproducttommy");
  }

  function handleclassic(){
    navigate("/menclassic")
  } 


  return (
    <>
      <Navbar />

      <div className="mendivmainisthis">
        <div className="menbannerone">
          <div className="menbenonepart">
            <p className="menbenonepartin">25% OFF SELECTED STYLES!*</p>
            <p className="menbentwopartin">With code: TREATYASELF</p>
          </div>
          <div className="menbentwopart">
            <p className="menbentwopartend">FREE WORLDWIDE DELIVERY</p>
          </div>
        </div>

        <div className="menbenafterone">
          <div className="menbenafteroneinone">
            <div className="payday">PAYDAY SALE</div>
            <p className="twentyfive"> 25% OFF SELECTED STYLES!</p>
            <div className="withcode">
              <p>With code: </p>
              <div>TREATYASELF</div>
            </div>
            <p className="afterwithcode">
              See website banner for Ts&amp;Cs. Selected marked products
              excluded from promo.
            </p>
          </div>
        </div>

        <div className="videoset">
          <ReactPlayer
            url="https://video.asos-media.com/Navigation/_content_MW_ASOS_FNS_Homepage_Desktop_Global_1258x600_Cinemagraph_V3_OW_Flash9_1440xAuto_2000K.mp4"
            width="1252px"
            height=""
            playing={true}
            loop={true}
            controls={true}
            volume="0"
            muted={true}
          />
        </div>

        <div className="absoluteone">
          <p>New trend: Streetwear</p>
          <p>staples</p>
        </div>

        <div className="aftervideoplayer">
          <div className="aftervideoinside" onClick={handledeneim}>
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_denim_hp_hero_870x1110_app_plain_240215114919.png"
              alt=""
            />
            <p className="brandp1">NEW DENIM</p>
            <p className="brand2">Your staples for every season</p>
          </div>
          <div className="aftervideoinside" onClick={handlespring}>
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_global_bohemian_summer_moment_870x1110.jpg"
              alt=""
            />
            <p className="brandp1">SPRING NEWNESS</p>
            <p className="brand2">Longer days = lighter layers</p>
          </div>
          <div className="aftervideoinside" onClick={handletommy}>
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_global_tommy_jeans_moment_870x1110.jpg"
              alt=""
            />
            <p className="brandp1">TOMMY JEANS</p>
            <p className="brand2">Sports Hertiage Collection</p>
          </div>
          <div className="aftervideoinside" onClick={handleclassic}>
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_global_quiet_luxury_moment_870x1110.jpg"
              alt=""
            />
            <p className="brandp1">CLASSIC STYLES</p>
            <p className="brand2">Your timeless essentials</p>
          </div>
        </div>

        <div className="freshfinds">
          <p className="freshp1"> UP TO 30% OFF FRESH FINDS</p>
          <p className="freshp2">
            Limited time only. Selected styles marked down as shown.
          </p>
        </div>

        <div className="gradient">
          <div className="gradientmaincon">
            <div className="gradient1">THE ASOS APP</div>
            <p className="gradient2">Hey, you app?</p>
            <p className="gradient3">
              Shop personalised edits created just for you
            </p>
            <div className="gradient4">DOWNLOAD NOW</div>
          </div>
        </div>

        <div className="duo">
          <div className="duopart" onClick={handledeneim}>
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_global_topman_denim_moment_870x1110_240213164928.jpg"
              alt=""
            />
            <p className="duop1">TOPMAN DENIM</p>
            <p className="duop2">Spring-ready wins</p>
            <div className="duobutton">SHOP NOW</div>
          </div>
          <div className="duopart" onClick={handleclassic}>
            <img
              src="https://content.asos-media.com/-/media/homepages/mw/2024/february/19-gbl/mw_global_green_moment_870x1110_240213164928.jpg"
              alt=""
            />
            <p className="duop1">TRENDING: GREEN</p>
            <p className="duop2">Colour of the season</p>
            <div className="duobutton">SHOP NOW</div>
          </div>
        </div>

        <div className="brands">
          <p className="trandingtag">TRENDING BRANDS </p>
          <div className="brandimages">
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/tommy-hilfiger-hp-logos-256x256.jpg"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/north-face.png"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/adidas-hp-logos-256x256---v2.png"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/carhartt-hp-logos-256x256.jpg"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/ellesse-hp-logos-256x256.jpg"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/dr-martens-hp-logos-256x256.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="menruller"></div>

        <Footer/>
      </div>
    </>
  );
};

export default Men;
