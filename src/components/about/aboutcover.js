import React, { Component } from 'react';
import "./aboutcover.css";
import AboutCover from '../../assets/aboutcover.png';

class Aboutcarousell extends Component {
    render() {
        return (
            <div>
                <img alt src={AboutCover} style={{width: '100%'}}/>
            </div>
        );
    }
}

export default Aboutcarousell;