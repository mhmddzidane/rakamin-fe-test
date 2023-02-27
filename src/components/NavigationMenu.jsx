import React from "react";
import { Link } from "react-router-dom";

const NavigationMenu = ({ closeMenu }) => {
  return (
    <>
      <div className="font-bold py-3">App Name</div>
      <ul>
        <li className="text-cyan-400 py-3 border-t border-b block">
          <Link to="/" onClick={closeMenu}>
            HOME
          </Link>
        </li>
        <li className="text-cyan-400 py-3  border-b block">
          <Link to="/about" onClick={closeMenu}>
            ABOUT
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavigationMenu;
