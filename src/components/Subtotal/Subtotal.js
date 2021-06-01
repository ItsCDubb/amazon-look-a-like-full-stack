import React from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "./Subtotal.css";

function Subtotal() {
  const [{ cart }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Cart ({cart?.length} items)
              <br />
              Subtotal: <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order containis a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>Buy</button>
    </div>
  );
}

export default Subtotal;
