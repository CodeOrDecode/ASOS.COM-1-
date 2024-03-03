import React from "react";
import "../Css/Footer.css";
const Footer = () => {
  return (
    <>
      <div className="fourhbanner">
        <div className="mainimage">
          <div id="mainimageone">
            <img
              src="https://www.buscopng.com/wp-content/uploads/2021/03/Facebook-logo-circular.png"
              alt=""
            />
            <img
              src="https://pleiadianportal.com/wp-content/uploads/2020/06/Purple-Insta.png"
              alt=""
            />
            <img
              src="https://th.bing.com/th/id/OIP.Hl2RYSsqub1WD29SnnL2mAHaHa?w=2047&h=2047&rs=1&pid=ImgDetMain"
              alt=""
            />
          </div>
          <div id="mainiamgetwo">
            <img
              src="https://images.asos-media.com/navigation/visa-png"
              alt=""
            />
            <img
              src="https://images.asos-media.com/navigation/mastercard-png"
              alt=""
            />
            <img
              src="https://images.asos-media.com/navigation/pay-pal-png"
              alt=""
            />
            <img
              src="https://images.asos-media.com/navigation/american-express-png"
              alt=""
            />
            <img
              src="https://images.asos-media.com/navigation/visa-electron-png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="firstfooter">
          <div className="stylediv">
            <h4>HELP & INFORMATION</h4>
            <p className="stylep">Help</p>
            <p className="stylep">Track order</p>
            <p className="stylep">Delivery & returns</p>
            <p className="stylep">Sitemap</p>
          </div>

          <div className="stylediv">
            <h4>ABOUT ASOS</h4>
            <p className="stylep">About us</p>
            <p className="stylep">Careers at ASOS</p>
            <p className="stylep">Corporate responsibility</p>
            <p className="stylep">Invertor's site</p>
          </div>

          <div className="stylediv">
            <h4>MORE FROM ASOS</h4>
            <p className="stylep">Mobile and ASOS apps</p>
            <p className="stylep">ASOS marketplace</p>
            <p className="stylep">Gift vouchers</p>
            <p className="stylep">Black Friday</p>
            <p className="stylep">ASOS x Thrify+</p>
            <p className="stylep">Discover the ASOS Card Credit </p>
            <p className="stylep">Help improve the ASOS Website</p>
          </div>

          <div className="stylediv">
            <h4>SHOPPING FROM:</h4>
            <div className="differfromp">
              <p className="stylep" style={{ letterSpacing: "2px" }}>
                You'are in{" "}
              </p>
              <img
                src="https://assets.asosservices.com/storesa/images/flags/in.png"
                alt=""
              />
            </div>

            <p className="stylep" style={{ letterSpacing: "2px" }}>
              Some of our international sites:
            </p>
            <div className="flags">
              <img
                src="https://assets.asosservices.com/storesa/images/flags/es.png"
                alt=""
              />
              <img
                src="https://assets.asosservices.com/storesa/images/flags/de.png"
                alt=""
              />
              <img
                src="https://assets.asosservices.com/storesa/images/flags/au.png"
                alt=""
              />
              <img
                src="https://assets.asosservices.com/storesa/images/flags/fr.png"
                alt=""
              />
              <img
                src="https://assets.asosservices.com/storesa/images/flags/us.png"
                alt=""
              />
              <img
                src="https://assets.asosservices.com/storesa/images/flags/dk.png"
                alt=""
              />
            </div>
            <div className="flags2">
              <img
                src="https://assets.asosservices.com/storesa/images/flags/it.png"
                alt=""
              />
              <img
                src="https://assets.asosservices.com/storesa/images/flags/nl.png"
                alt=""
              />
              <img
                src="https://assets.asosservices.com/storesa/images/flags/pl.png"
                alt=""
              />
              <img
                src="https://assets.asosservices.com/storesa/images/flags/se.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="footersecond">
          <div className="footerlastpartone">© 2024 ASOS</div>
          <div className="footerlastpart">
            <div className="oncome">Privacy &amp; Cookies</div>
            <div className="oncome">Ts&amp;Cs</div>
            <div className="oncome">Accessibility</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
