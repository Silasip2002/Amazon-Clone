import React from "react";
import "../Header/Header.css";
import logo from "../../image/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} />
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Yours</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <AddShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
