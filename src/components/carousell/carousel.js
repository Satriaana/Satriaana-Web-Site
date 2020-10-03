import React, { Component } from 'react';
import "./carousel.css";
import Cover from '../../assets/cover.png';

class carousel extends Component {
    render() {
        return (
            <div>
                <img alt="" src={Cover} style={{width: '100%'}}/>

            </div>
        );
    }
}

export default carousel;