import React, { Component } from 'react';
import "./carousel.css";
import Cover from './cover.png';

class carousel extends Component {
    render() {
        return (
            <div>
                <img alt src={Cover} style={{width: '100%'}}/>

            </div>
        );
    }
}

export default carousel;