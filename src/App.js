import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from "../src/components/Payment/Payment";
import Header from "../src/components/Header/Header";
import Orders from "../src/components/Orders/Orders";
import { useStateValue } from "../src/StateProvider";
import { Elements } from "@stripe/react-stripe-js";
import Login from "../src/components/Login/Login";
import Home from "../src/components/Home/Home";
import Cart from "../src/components/Cart/Cart";
import { loadStripe } from "@stripe/stripe-js";
import { auth } from "../src/firebase";
import "./App.css";

const promise = loadStripe(
  "pk_test_51Iwtd6JqM4UAAfiFJ1cdloF9vbG20HSFA3sMr6202IptW7vQqSZHI8aFSXI2W0tlg47ITtDFl8DVTIq6ilBUDNRa00BsZgkTj7"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only rune once when app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>> ", authUser);
      if (authUser) {
        // The user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM (Block Element Modifier) naming convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
