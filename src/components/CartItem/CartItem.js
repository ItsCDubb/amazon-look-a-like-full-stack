import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CartItem.css";

function CartItem({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeItem = () => {
    // Remove items from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt="" />
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          {price}
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="cartItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && <button onClick={removeItem}>Remove</button>}
      </div>
    </div>
  );
}

export default CartItem;
