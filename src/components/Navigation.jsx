import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  let menu = (
    <div
      className={`fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3 duration-500 ease-out transition-all -translate-x-full ${
        showMenu && "translate-x-0"
      }`}
    >
      <span>this is menu</span>
      <ul className="mt-3">
        <li>HOME</li>
        <li>ABOUT</li>
      </ul>
    </div>
  );

  let menuMask = (
    <div
      className={`fixed bg-black-t-50 top-0 left-0 w-full cursor-pointer h-full z-50 duration-500 ease-out transition-all -translate-x-full ${
        showMenu && "translate-x-0"
      }`}
      onClick={() => setShowMenu(false)}
    ></div>
  );

  return (
    <nav>
      <span className="text-xl cursor-pointer">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {menuMask}
      {menu}
    </nav>
  );
};

export default Navigation;
