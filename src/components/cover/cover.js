import React, { Component } from "react";
import "./cover.css";

class Cover extends Component {
    render() {
        return (
            <div class="covr">
                <div className="jumbotron jumbotron-fluid" style={{fontSize: '40px', fontFamily: 'Poppins, sans-serif', margin: '0'}}>
                    <div className="container-fluid">
                        <h1 className="display-3 font-weight-bold" style={{marginLeft: '35px'}}>Lorem ipsum dolor sit amet consectetur adipiscing</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cover;
