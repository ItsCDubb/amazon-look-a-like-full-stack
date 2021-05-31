import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import Cart from "../src/components/Cart/Cart";
import "./App.css";

function App() {
  return (
    // BEM (Block Element Modifier) naming convention
    <Router>
      <div className="app">
        <Switch>
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
