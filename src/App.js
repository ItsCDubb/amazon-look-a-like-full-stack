import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import Cart from "../src/components/Cart/Cart";
import Login from "../src/components/Login/Login";
import { auth } from "../src/firebase";
import { useStateValue } from "../src/StateProvider";
import "./App.css";

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
          <Route path="/login">
            {/* Login */}
            <Login />
          </Route>
          <Route path="/cart">
            {/* Header */}
            <Header />
            {/* Cart */}
            <Cart />
          </Route>
          <Route path="/">
            {/* Header */}
            <Header />
            {/* Home */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
