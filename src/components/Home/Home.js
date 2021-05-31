import React from "react";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1234567895"
            title="SUPER DEAL Lift Top Coffee Table w/Hidden Compartment and Storage Shelves Pop-Up Storage Cocktail Table"
            price={105.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71jhpl-SixL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234567890"
            title="Lamicall Cell Phone Stand, Desk Phone Holder Cradle Compatible with Phone 11 Pro Xs Max XR X 8 7 6 Plus SE, Samsung Galaxy, LG Moto Pixel All Smartphones Charging Dock, Desktop Accessories - Silver"
            price={11.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61pQ-xFrfFL._AC_SL1300_.jpg"
          />
          <Product
            id="1234567891"
            title="Redragon M601-WL-BA Wireless Gaming Mouse and Mouse Pad Combo, Ergonomic MMO 6 Button Mouse, 2400 DPI, Red LED Backlit & Large Mouse Pad for Windows PC Gamer (Black Wireless Mouse & Mousepad Set)"
            price={23.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71b4CIrbF2L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1234567892"
            title="Baker's Edge Nonstick Edge Brownie Pan"
            price={36.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41TpFxp9GRL._AC_.jpg"
          />
          <Product
            id="1234567893"
            title="Wireless Gaming Mouse, Scettar Rechargeable Computer Gaming Mouse Unique Silent Click, 7 Breathing Led Light, 3 Adjustable DPI,Iron Plate, Power Saving Mode Wireless Mouse for Laptop/PC/Notebook"
            price={15.68}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61gxibACKBL._AC_SL1500_.jpg"
          />
          <Product
            id="1234567894"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses (Hardcover)"
            price={14.79}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
