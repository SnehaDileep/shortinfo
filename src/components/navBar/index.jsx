import React, { useState } from "react";
import {HiX } from "react-icons/hi";
import { FaBars, FaReact } from "react-icons/fa";  //The code imports necessary components and icons from external libraries react-icons and react-router-dom
import { Link } from "react-router-dom";
import "./styles.scss";

//An array named data contains objects representing menu items.
// Each object has a label for the menu item name and a to property for the URL it should link to.
const data = [
  {
    label: "HOME",
    to: "/shortinfo",//updated
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  
];

//The Navbar component is defined using a functional approach.
// The click state is managed using the useState hook. It track whether the menu is currently clicked or not.
// This function toggles the click state when called. It's used to expand or collapse the menu.
// This function closes the menu by setting the click state to false.
const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  //The component returns JSX elements to create the navigation bar.
  //The menu items are rendered dynamically using the map function on the data array. Each menu item is wrapped 
  //in a Link component that navigates to the specified URL.
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="navbar__container">
          <Link exact to="/shortinfo" className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
          <ul className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
            {data.map((item) => (
              <li className="navbar__container__menu__item">
                <Link
                  exact
                  to={item.to}
                  activeClassName="active"
                  className="navbar__container__menu__item__links"
                  onClick={click ? handleClick : null}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; //The Navbar component is exported as the default export, making it available for use in other parts of the application.
