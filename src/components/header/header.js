import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/satriaana-logo.png";

class header extends Component {
  render() {
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
            <a
              className="navbar-brand"
              href="https://satriaana.github.io/Satriaana-Web-Site/"
            >
              <img
                alt
                src={HeaderLogo}
                style={{
                  width: "130px",
                }}
              />
            </a>
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
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://blog.satriaana.org">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://forum.satriaana.org">
                    Forum
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" style={{ textDecoration: "none" }} to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default header;
