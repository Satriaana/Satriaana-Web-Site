import React, { Component } from "react";
import "./header.css";
//import Logo from '../logoImage/satrianna.jpeg';

//header component

class header extends Component {
  render() {
    return (
      <header>
        <nav class="navbar navbar-light navbar-expand-md" style={{fontFamily: 'Poppins, sans-serif', fontSize: '18px'}}>
        <div class="container-fluid"><a class="navbar-brand" href="#" style={{background: 'url(./satriaana-logo.png) center / cover no-repeat', color: 'rgba(0,0,0,0)', width: '150px', height: '80px'}}>Satriaana</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse d-md-flex d-lg-flex justify-content-md-end justify-content-lg-end" id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Forum</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>
        </div>
        </div>
    </nav>
      </header>
    );
  }
}

export default header;
