import React from "react";
import Subtotal from "../../components/Subtotal/Subtotal";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart">
      <div className="cart__left">
        <img
          className="cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="cart__title">Your Cart</h2>
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
          {/* CartItem */}
        </div>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
