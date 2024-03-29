import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Hello {user.username}</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link className="header__link" to="/login">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link className="header__link" to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
