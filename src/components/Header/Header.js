import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function Header() {
  const { state } = useSelector((state) => ({ ...state }));
  const { user } = state;
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs, Podcasts" type="text" />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="pic" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
export default Header;
