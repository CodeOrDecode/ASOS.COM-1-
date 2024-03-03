import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Men from "../Components/Men";
import Women from "../Components/Women";
import Menproductdenim from "../Components/Menproductdenim";
import Womenproductdenim from "../Components/Womenproductdenim";
import Singleproduct from "../Components/Singleproduct";
import Checkout from "../Components/Checkout";
import Bag from "../Components/Bag";
import Nopagefound from "../Components/Nopagefound";
import Loader from "../Components/Loader";
import Conformation from "../Components/Conformation";
import Menproductspring from "../Components/Menproductspring";
import Menproducttommy from "../Components/Menproducttommy";
import Menclassic from "../Components/Menclassic";
import Womenproductcardies from "../Components/Womenproductcardies";
import Womenproductmario from "../Components/Womenproductmario";
import Womenproductvintage from "../Components/Womenproductvintage";
import Privateroute from "../Private/Privateroute";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/men"
          element={
            <Privateroute>
              <Men />
            </Privateroute>
          }
        />
        <Route path="/women" element={<Women />} />
        <Route path="/menproductdenim" element={<Menproductdenim />} />
        <Route path="/menproductspring" element={<Menproductspring />} />
        <Route path="/menproducttommy" element={<Menproducttommy />} />
        <Route path="/menclassic" element={<Menclassic />} />

        <Route path="/womenproductdenim" element={<Womenproductdenim />} />
        <Route path="/womenproductcardies" element={<Womenproductcardies />} />
        <Route path="/womenproductmario" element={<Womenproductmario />} />
        <Route path="/womenproductvintage" element={<Womenproductvintage />} />

        <Route path="/singleproduct" element={<Singleproduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/conformation" element={<Conformation />} />
        <Route path="*" element={<Nopagefound />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
