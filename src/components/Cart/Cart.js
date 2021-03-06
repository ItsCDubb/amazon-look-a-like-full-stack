import React from "react";
import Subtotal from "../../components/Subtotal/Subtotal";
import CartItem from "../../components/CartItem/CartItem";
import { useStateValue } from "../../StateProvider";
import "./Cart.css";

function Cart() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__left">
        <img
          className="cart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="cart__title">Your Cart</h2>
          {cart.map((item) => (
            <CartItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
