import React, { Component } from "react";
import "./titleintroduction.css";

class Titleintroduction extends Component {
    render(){
        return(
            <div className="container" style={{fontFamily: 'Poppins, sans-serif', marginBottom: '60px'}}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="about">
                            <h2>We are,</h2>
                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</h3>
                        </div>
                    </div>

                        <div className="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <img class="card-img" src="..." alt="Card image"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Titleintroduction;
