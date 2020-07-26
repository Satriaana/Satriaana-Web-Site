import React, { Component } from "react";
import "./titleintroduction.css";

class Titleintroduction extends Component {
    render(){
        return(
            <div className="container">
                <div className="Card">
                    <div className="card .body">
                        <h2>Lorem Ipsum</h2>
                    </div>
                    <div className="card .img" variant="bottom" src="holder.js/100px180"></div>
                </div>
            </div>
        );
    }
}

export default Titleintroduction;
