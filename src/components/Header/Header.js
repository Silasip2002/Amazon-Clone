import React from "react";
import "../Header/Header.css";
import logo from "../../image/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
      console.log("Check the user is null :");
      console.log(isNaN(user));
    }
  };

  console.log("user >> : ");
  console.log(user);
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__linkToLogin">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Gust"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : " Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Yours</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <AddShoppingCartIcon></AddShoppingCartIcon>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Header;
