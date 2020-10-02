import React, { Component } from "react";
import forumImage from "../../assets/nordwood-themes-bJjsKbToY34-unsplash.png"

class Forum extends Component {
  render() {
    return (
        <div style={{fontFamily: 'Kumbh Sans'}}>
        <div class="container" style={{paddingTop: '50px'}}>
            <div class="row">
                <div class="col-md-12" style={{marginBottom: '10px'}}>
                    <h1 style={{fontSize: '40px', fontFamily: 'Kumbh Sans', fontWeight: 'bold'}}>Forum<button class="btn btn-primary float-right" type="button">Lorem Ipsum</button></h1>
                    <p style={{fontSize: '21px', fontFamily: 'Kumbh Sans', color: '#21262b'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,&nbsp;<br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p>
                </div>
            </div>
            <div class="row" style={{paddingBottom: '50px'}}>
                <div class="col-md-4">
                    <div class="card" style={{borderRadius: '10px', marginBottom: '30px'}}><img class="card-img w-100 d-block" src={forumImage} style={{objectFit:"cover",height: '320px', borderRadius: '10px'}}/>
                        <div class="card-img-overlay" style={{background: 'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat', borderRadius: '10px'}}>
                            <h4 style={{color: 'rgb(255,255,255)', textShadow: '0px 0px 1px'}}>Recent Thread #1</h4>
                            <p style={{color: 'rgb(255,255,255)', textShadow: '0px 0px 1px'}}><a href="#">Visit &gt;</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card" style={{borderRadius: '10px', marginBottom: '30px'}}><img class="card-img w-100 d-block" src={forumImage} style={{objectFit:"cover",height: '320px', borderRadius: '10px'}}/>
                        <div class="card-img-overlay" style={{background: 'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat', borderRadius: '10px'}}>
                            <h4 style={{color: 'rgb(255,255,255)', textShadow: '0px 0px 1px'}}>Recent Thread #2</h4>
                            <p style={{color: 'rgb(255,255,255)', textShadow: '0px 0px 1px'}}><a href="#">Visit &gt;</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card" style={{borderRadius: '10px', marginBottom: '30px'}}><img class="card-img w-100 d-block" src={forumImage} style={{objectFit:"cover",height: '320px', background: 'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat', borderRadius: '10px'}}/>
                        <div class="card-img-overlay" style={{borderRadius: '10px'}}>
                            <h4 style={{color: 'rgb(255,255,255)', textShadow: '0px 0px 1px'}}>Recent Thread #3</h4>
                            <p style={{color: 'rgb(255,255,255)', textShadow: '0px 0px 1px'}}><a href="#">Visit &gt;</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Forum;
