import React from "react";
import "./toggleTheme.css";
import "./header.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/satriaana-logo.png";

import ToggleMode from '../Services/toggleMode'
const  header =  ()=>{
  return (
    <header>
      <nav
        className="navbar navbar-light navbar-expand-md"
        style={{
          fontFamily: "Kumbh Sans",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        <div className="container-fluid">
          <img
            alt
            src={HeaderLogo}
            style={{
              width: "130px",
            }}
          />
          <a className="navbar-brand" href="#"></a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex d-lg-flex justify-content-md-end justify-content-lg-end"
            id="navcol-1"
          >
            <ul className="nav navbar-nav">
              {/* {this.props.toggleMode ? "Working " : "Not Working"} */}
              <Link style={{ textDecoration: "none" }} to="/Satriaana-Web-Site">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Forum
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <Link style={{ textDecoration: "none" }} to="/about">
                <li className="nav-item">
                  <a className="nav-link">About</a>
                </li>
              </Link>
              {/* <button
                type="button"
                onClick={toggle}
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                  outline: "none",
                }}
              >
                Toggle to {!dark ? "Dark" : "Light"} theme
              </button> */}
              <ToggleMode/>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
