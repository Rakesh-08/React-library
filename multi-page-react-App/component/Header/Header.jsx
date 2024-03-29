

import { Link } from "react-router-dom";
import React,{ useContext } from "react";
import { StateContextValue } from "../../context/StateProvider";
import "./Header.css";

export default function Header({ searchProduct, setSearchProduct }) {
  const [{cart}]= StateContextValue();

  return (
    <div className="header">
      <div className="headerContainer">
        <Link to="/">
          <img
            className="headerImage"
            src="data:image/jpeg;base64,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"
            alt="logo"
          />
        </Link>
        <div className="searchBox">
          <input
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            placeholder="search the product"
            type="text"
          />
        </div>
      </div>

      <div className="headerRight">
        <Link to="/checkout">
          <div className="headerOption_basket">cart <span>{cart?.length}</span></div>
        </Link>
      </div>
    </div>
  );
}
