import React, { useState, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ResultContext } from "../contexts/ResultContext";

import logo from "../assets/pics/gameLogo.png";
import chestPic from "../assets/pics/chest.png";
import openTheChestPic from "../assets/pics/openTheChest.png";
function Navebar() {
  const [active, setActive] = useState("navMenu");
  const [hamburger, setHamburger] = useState(chestPic);

  const { scrollTop } = useContext(ResultContext);

  const navToggle = () => {
    if (active === "navMenu") {
      setActive("navMenu navActive"), setHamburger(openTheChestPic);
    } else {
      setActive("navMenu"), setHamburger(chestPic);
    }
  };

  return (
    <div>
      <nav className="nav">
        <div className="navBrand">
          <div className="logoPic">
            <Link to="/" onClick={() => scrollTop()}>
              <img src={logo} alt="遊戲清單" />
            </Link>
          </div>
        </div>

        <ul className={active}>
          <li className="navItem">
            <Link
              to="Info"
              className="navLink  navLinkLeft"
              onClick={() => scrollTop()}
            >
              資料來源
            </Link>
          </li>
          <li className="navItem">
            <Link
              to="Intro"
              className="navLink navLinkLeft"
              onClick={() => scrollTop()}
            >
              動物百科
            </Link>
          </li>

          <li className="navItem navButton">
            <Link
              to="Question1"
              className="navLink"
              onClick={() => scrollTop()}
            >
              <button>開始遊戲</button>
            </Link>
          </li>
        </ul>

        <div onClick={navToggle} className="navToggler">
          <img src={hamburger} alt="清單" />
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navebar;
