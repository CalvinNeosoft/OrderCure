import React from "react";
import { Link } from "react-router-dom";

function DesktopNavigationBar() {
  return (
    <div>
      <div className="desktop-navbar">
        <nav className="navbar navbar-expand-lg desktop-navbar-links">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav  mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Menu
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Search
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Branch
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Link to="/" className="language-selection-option">
          عربى
        </Link>
      </div>
    </div>
  );
}

export default DesktopNavigationBar;
