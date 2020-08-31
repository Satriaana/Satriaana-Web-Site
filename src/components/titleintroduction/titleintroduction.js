import React, { Component } from "react";
import "./titleintroduction.css";

class Titleintroduction extends Component {
    render(){
        return(
            <div class="container" style={{marginTop: '50px', marginBottom: '50px'}}>
            <div class="row">
                <div class="col-md-12" style={{marginBottom: '16px'}}>
                    <h1 style={{fontSize: '40px', fontFamily: 'Poppins, sans-serif'}}>We are,</h1>
                    <p style={{fontSize: '16px', fontFamily: 'Poppins, sans-serif'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,&nbsp;<br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card" style={{borderRadius: '10px'}}><img class="card-img w-100 d-block" style={{background: 'url(./arif-riyanto-vJP-wZ6hGBg-unsplash.png) center / cover no-repeat', height: '320px', borderRadius: '10px'}}/>
                        <div class="card-img-overlay">
                            <h4 style={{fontSize: '16px', fontFamily: 'Poppins, sans-serif', color: 'rgb(255,255,255)'}}>Lorem Ipsum Dolor Amet</h4>
                            <p style={{fontSize: '16px', fontFamily: 'Poppins, sans-serif', color: 'rgb(255,255,255)'}}>Nullam id dolor id nibh ultricies vehicula ut id elit</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p style={{fontSize: '16px', fontFamily: 'Poppins, sans-serif', marginTop: '16px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,&nbsp;<br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p><strong style={{fontSize: '14px', fontFamily: 'Poppins, sans-serif'}}><a href="#">Discover More &gt;</a></strong></div>
            </div>
        </div>
        );
    }
}

export default Titleintroduction;
