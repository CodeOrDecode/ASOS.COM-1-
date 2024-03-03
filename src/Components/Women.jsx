import React from "react";
import "../Css/Women.css";
import Navbar from "../Allsimilar/Navbar";
import ReactPlayer from "react-player";
import Footer from "../Allsimilar/Footer";
import { useNavigate } from "react-router-dom";

const Women = () => {
  const navigate = useNavigate();


  function handlehome(){
    navigate("/")
  }

  function handledenim(){
    navigate("/Womenproductdenim");
  }

  function handlefootwear(){
    navigate("/womenproductvintage");
  } 

  function handlecardies(){
    navigate("/womenproductcardies");
  }


  function  handlemario(){
    navigate("/womenproductmario");
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
            url="https://video.asos-media.com/Navigation/_content_WW_ASOS_FNS_Homepage_Desktop_Global_1258x600_BestSpot_V21_OW_Flash9_1440xAuto_2000K.mp4"
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
          <p>New trend: wilderness</p>
        </div>

        <div className="aftervideoplayer">
          <div className="aftervideoinside" onClick={handledenim}>
            <img
              src="https://content.asos-media.com/-/media/homepages/ww/2024/february/10-denim-heros/ww_denim_hp_hero_870x1110_mob_plain.png"
              alt=""
            />
            <p className="brandp1">NEW DENIM</p>
            <p className="brand2">Your staples for every season</p>
          </div>
          <div className="aftervideoinside" onClick={handlefootwear}>
            <img
              src="https://content.asos-media.com/-/media/homepages/ww/2024/february/19-gbl/export/moment/ww_global_footwear_moment_870x1110.jpg"
              alt=""
            />
            <p className="brandp1">FRESH FOOTWEAR</p>
            <p className="brand2">Ft. boots, sneaks + more!</p>
          </div>
          <div className="aftervideoinside" onClick={handlecardies}>
            <img
              src="https://content.asos-media.com/-/media/homepages/ww/2024/february/19-gbl/export/moment/ww_global_cardigans_moment_870x1110.jpg"
              alt=""
            />
            <p className="brandp1">HOT RN: CARDIES</p>
            <p className="brand2">The trending layer</p>
          </div>
          <div className="aftervideoinside" onClick={handlemario}>
            <img
              src="https://content.asos-media.com/-/media/homepages/ww/2024/february/19-gbl/export/moment/ww_global_mario_badescu_moment_870x1110.jpg"
              alt=""
            />
            <p className="brandp1">MARIO BADESCU</p>
            <p className="brand2">Supercharge your skincare</p>
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
          <div className="duopart" onClick={handledenim}>
            <img
              src="https://content.asos-media.com/-/media/homepages/ww/2024/february/19-gbl/export-with-border/moment/ww_global_topshop_denim_moment_870x1110.jpg"
              alt=""
            />
            <p className="duop1">TOPSHOP DENIM</p>
            <p className="duop2">Spring-ready wins</p>
            <div className="duobutton">SHOP NOW</div>
          </div>
          <div className="duopart" onClick={handlecardies}>
            <img
              src="https://content.asos-media.com/-/media/homepages/ww/2024/february/19-gbl/export-with-border/moment/ww_global_reclaimed_vintage_moment_870x1110.jpg"
              alt=""
            />
            <p className="duop1">RECLAIMED VINTAGE</p>
            <p className="duop2">Old-school styling</p>
            <div className="duobutton">SHOP NOW</div>
          </div>
        </div>

        <div className="brands">
          <p className="trandingtag">TRENDING BRANDS </p>
          <div className="brandimages">
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/monkl-hp-logos-256x256.jpg"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/never-fully-dressed-hp-logos-256x256.png"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/1x12x---test.png"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/reclaimed-vintage-hp-logos-256x256.jpg"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/collusion-hp-logos-256x256.jpg"
                alt=""
              />
            </div>
            <div className="smallimages">
              <img
                src="https://content.asos-media.com/-/media/homepages/unisex/brands-logos/256x256/weekday-hp-logos-256x256.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="menruller"></div>

        <Footer />
      </div>
    </>
  );
};

export default Women;
