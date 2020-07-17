import React, { Component } from "react";
import "./header.css";
//import Logo from '../logoImage/satrianna.jpeg';

//header component

class header extends Component {
  render() {
    return (
      <header>
        <nav class="nav">
          <div class="container">
            <div class="logo">
              <a href="/">
                <img  src="satrianna.jpeg" alt="Satriaana" />
              </a>
            </div>
            <div id="mainListDiv" class="main_list">
              <ul class="navlinks">
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Forum</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <span class="navTrigger">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </nav>
      </header>
    );
  }
}

export default header;
