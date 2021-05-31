import React from "react";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [{ cart }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/* Icon */}
        <YoutubeSearchedForIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        {/* Hello/Sign in */}
        <div className="header__link">
          <span className="header__linkLineOne">Hello Guest</span>
          <span className="header__linkLineTwo">Sign In</span>
        </div>
        {/* Returns & Orders */}
        <div className="header__link">
          <span className="header__linkLineOne">Returns</span>
          <span className="header__linkLineTwo">& Orders</span>
        </div>
        {/* Your Prime */}
        <div className="header__link">
          <span className="header__linkLineOne">Your</span>
          <span className="header__linkLineTwo">Prime</span>
        </div>
        <Link to="/cart">
          <div className="header__linkCart">
            <ShoppingCartOutlinedIcon />
            <span className="header__linkLineTwo header__cartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
