import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/pics/gameLogo.png";
import chestPic from "../assets/pics/chest.png";
import openTheChestPic from "../assets/pics/openTheChest.png";
function Navebar() {
  const [active, setActive] = useState("navMenu");
  const [hamburger, setHamburger] = useState(chestPic);

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
        <a href="#" className="navBrand">
          <div className="logoPic">
            <Link to="/">
              <img src={logo} alt="遊戲清單" />
            </Link>
          </div>
        </a>

        <ul className={active}>
          <li className="navItem">
            <Link to="Info" className="navLink  navLinkLeft">
              資料來源
            </Link>
          </li>
          <li className="navItem">
            <Link to="Intro" className="navLink navLinkLeft">
              動物百科
            </Link>
          </li>

          <li className="navItem navButton">
            <Link to="Question1" className="navLink">
              <button>開始遊戲</button>
            </Link>
            {/* <a href="#" className="navLink">
              <button>遊戲開始</button>
            </a> */}
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
