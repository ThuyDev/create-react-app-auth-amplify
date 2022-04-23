import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify, { Auth } from "aws-amplify";
import aws_exports from "./aws-exports";
import PageNotFound from "./pages/PageNotFound";
import OderNewPage from "./pages/OderNewPage";
import OderEditPage from "./pages/OderEditPage";
import OderListPage from "./pages/OrderListPage";

Amplify.configure(aws_exports);

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

function App(props) {
  const [isAuth, setIsAuth] = React.useState(Auth.user ? true : false);
  const [inDark, setInDark] = React.useState(false);

  React.useEffect(() => {
    const themeMode = localStorage.getItem("theme-mode");
    if (themeMode && themeMode === "dark") {
      document.documentElement.classList.add("dark");
      setInDark(true);
    } else {
      setInDark(false);
    }
  }, []);

  const onChangeDarkMode = () => {
    if (inDark) document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");

    localStorage.setItem("theme-mode", inDark ? "light" : "dark");
    setInDark(!inDark);
  };

  async function signOut() {
    try {
      await Auth.signOut();
      setIsAuth(false);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  if (!isAuth) {
    window.location.reload();

    return <></>;
  }

  return (
    <BrowserRouter>
      <div className="container mx-auto my-6 border border-gray-500 text-gray-900 dark:text-gray-100">
        <nav>
          <ul className="flex flex-row">
            <li>
              <Link to="/" className="btn btn-default">
                New Order
              </Link>
            </li>
            <li>
              <Link to="/order-list" className="btn btn-default">
                List Order
              </Link>
            </li>
            <div className="flex-grow"></div>
            <li>
              <button
                className="m-1 btn-link"
                onClick={() => onChangeDarkMode()}
              >
                {inDark ? <SunIcon /> : <MoonIcon />}
              </button>
            </li>
            <li>
              <button
                className="btn btn-link"
                onClick={() => {
                  signOut();
                }}
              >
                Signout
              </button>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<OderNewPage />} />
          <Route path="/order" element={<OderNewPage />} />
          <Route path="/order/:orderId" element={<OderEditPage />} />
          <Route path="/order-list" element={<OderListPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
