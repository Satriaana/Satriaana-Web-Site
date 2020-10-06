import React, { Component } from 'react';
import "./contactcover.css";
import ContactCover from '../../assets/contactcover.png';

class Aboutcarousell extends Component {
    render() {
        return (
            <div>
                <img alt="" src={ContactCover} style={{width: '100%'}}/>
            </div>
        );
    }
}

export default Aboutcarousell;