import React from "react";
import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import MoonIcon from "../../svg-icons/MoonIcon";
import SunIcon from "../../svg-icons/SunIcon";

function NavigationBar({ signOut, className }) {
  const { isDark, toggleDark } = useDarkMode();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav className={`${className || ''}`}>
      <ul className="flex flex-row">
        <li>
          <Link to="/" className="my-btn my-btn-link">
            New Order
          </Link>
        </li>
        <li>
          <Link to="/order-list" className="my-btn my-btn-link">
            List Order
          </Link>
        </li>
        <div className="flex-grow"></div>
        <li>
          <button className="m-1 my-btn-link" onClick={() => toggleDark()}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </li>
        <li>
          <button
            className="my-btn my-btn-link"
            onClick={() => {
              typeof signOut === "function" && signOut();
            }}
          >
            Signout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
