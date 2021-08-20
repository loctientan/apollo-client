import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SingIn from "./../../pages/Authentication/SignIn/signin";

function Header() {
  const [navBar, setNavBar] = useState(false);

  const handleNavBar = () => {
    setNavBar(!navBar);
  };

  return (
    <div>
      <header className="header">
        <div className="navContainer">
          <nav className="nav-container">
            <ul className="container">
              <li className="nav-home">
                <NavLink to="/"> Home Pages </NavLink>
              </li>
              <li className="dropdown">
                <a href={"foo"}>
                  Pages <i className="fa fa-angle-down"></i>
                </a>
                <div className="mega-menu">
                  <div className="container">
                    <div className="item">
                      <h3>Home Page</h3>
                      <ul>
                        <li>
                          <a href={"foo"}>Home Page No #1</a>
                        </li>
                        <li>
                          <a href={"foo"}>Home Page No #2</a>
                        </li>
                        <li>
                          <a href={"foo"}>Home Page No #3</a>
                        </li>
                        <li>
                          <a href={"foo"}>Home Page No #4</a>
                        </li>
                      </ul>
                    </div>
                    <div className="item">
                      <h3>Contact</h3>
                      <ul>
                        <li>
                          <a href={"foo"}>Contact Page No #1</a>
                        </li>
                        <li>
                          <a href={"foo"}>Contact Page No #2</a>
                        </li>
                        <li>
                          <a href={"foo"}>Contact Page No #3</a>
                        </li>
                        <li>
                          <a href={"foo"}>Contact Page No #4</a>
                        </li>
                        <li>
                          <a href={"foo"}>Contact Page No #5</a>
                        </li>
                      </ul>
                    </div>
                    <div className="item">
                      <h3>Portfolio</h3>
                      <ul>
                        <li>
                          <a href={"foo"}>Portfolio Page No #1</a>
                        </li>
                        <li>
                          <a href={"foo"}>Portfolio Page No #2</a>
                        </li>
                        <li>
                          <a href={"foo"}>Portfolio Page No #3</a>
                        </li>
                      </ul>
                    </div>
                    <div className="item">
                      <h3>Custom</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown">
                <a href={"foo"}>
                  Images <i className="fa fa-angle-down"></i>{" "}
                </a>
                <div className="mega-menu">
                  <div className="container">
                    <div className="item">
                      <h3>Image One</h3>
                    </div>

                    <div className="item">
                      <h3>Image One</h3>
                    </div>

                    <div className="item">
                      <h3>Image One</h3>
                    </div>

                    <div className="item">
                      <h3>Image One</h3>
                    </div>

                    <div className="item">
                      <h3>Image One</h3>
                    </div>

                    <div className="item">
                      <h3>Image One</h3>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href={"foo"}>About</a>
              </li>
              <li>
                <a href={"foo"}>Conatct</a>
              </li>
            </ul>
          </nav>
          <nav>
            <div
              className="mainNav"
              style={navBar ? { transform: "translateX(0)" } : null}
            >
              <SingIn />
            </div>
          </nav>
          <button
            onClick={handleNavBar}
            className={`navToggle ${navBar ? "open" : null}`}
          >
            <span />
            <span />
            <span />
          </button>
          <div
            onClick={handleNavBar.bind(this)}
            className={`overlay ${navBar ? "open" : ""}`}
          />
        </div>
      </header>
      <div className="wrapper"></div>
    </div>
  );
}
export default Header;