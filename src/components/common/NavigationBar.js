import React from "react";
import { Link, useLocation } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5 transform -rotate-90"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
function NavigationBar({ signOut }) {
  const { isDark, toggleDark } = useDarkMode();
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav>
      <ul className="flex flex-row">
        <li>
          <Link to="/" className="btn btn-link">
            New Order
          </Link>
        </li>
        <li>
          <Link to="/order-list" className="btn btn-link">
            List Order
          </Link>
        </li>
        <div className="flex-grow"></div>
        <li>
          <button className="m-1 btn-link" onClick={() => toggleDark()}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </li>
        <li>
          <button
            className="btn btn-link"
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
