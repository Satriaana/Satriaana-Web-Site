import React, { Component } from "react";
import "./blog.css";

class Blog extends Component {
  render() {
    return (
      <div style={{background: 'linear-gradient(90deg, #df4722, #d90b74)'}}>
        <div className="container" style={{paddingTop: '30px'}}>
            <div className="row">
                <div className="col-md-12" style={{marginBottom: '15px'}}>
                    <h1 style={{color: 'rgb(255,255,255)', fontSize: '40px', fontFamily: 'Poppins, sans-serif'}}>Forum<button class="btn btn-primary float-right" type="button" style={{backgroundColor: 'rgb(248,248,248)', color: '#222f3a', fontFamily: 'Poppins, sans-serif', marginLeft: '410px', marginTop: '15px'}}>Lorem Ipsum</button></h1>
                    <p style={{fontFamily: 'Poppins, sans-serif', color: 'rgb(255,255,255)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p>
                </div>
            </div>
            <div className="row" style={{paddingBottom: '30px'}}>
                <div className="col-md-6" style={{marginBottom: '15px'}}>
                    <div className="card" style={{borderRadius: '10px'}}><img class="card-img-top w-100 d-block" style={{background: 'url(public/john-schnobrich-FlPc9_VocJ4-unsplash.png) center / cover no-repeat', height: '380px', borderRadius: '10px'}}/>
                        <div className="card-body">
                            <h4 className="card-title" style={{fontFamily: 'Poppins, sans-serif'}}>Recent Article 1</h4>
                            <p className="card-text" style={{fontFamily: 'Poppins, sans-serif'}}>Nullam id dolor id nibh ultricies vehicula ut id elit.&nbsp;</p><button class="btn btn-primary" type="button" style={{fontFamily: 'Poppins, sans-serif'}}>Discover More</button></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row" style={{marginBottom: '10px'}}>
                        <div className="col">
                            <div className="card" style={{borderRadius: '10px'}}><img class="card-img-top w-100 d-block" style={{background: 'url(public/nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat', height: '150px', borderRadius: '10px'}}/>
                                <div className="card-body" style={{height: '80px'}}>
                                    <h4 className="card-title" style={{fontFamily: 'Poppins, sans-serif', paddingBottom: 'px', marginBottom: '5px'}}>Recent Article 2</h4><button class="btn btn-primary" type="button" style={{fontFamily: 'Poppins, sans-serif'}}>Button</button></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{borderRadius: '10px'}}><img class="card-img-top w-100 d-block" style={{background: 'url(public/nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat', height: '150px', borderRadius: '10px'}}/>
                                <div className="card-body" style={{height: '80px'}}>
                                    <h4 className="card-title" style={{fontFamily: 'Poppins, sans-serif', paddingBottom: 'px', marginBottom: '5px'}}>Recent Article 3</h4><button class="btn btn-primary" type="button" style={{fontFamily: 'Poppins, sans-serif'}}>Button</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{marginTop: '10px'}}>
                            <div className="card" style={{borderRadius: '10px'}}><img class="card-img-top w-100 d-block" style={{background: 'url(public/arif-riyanto-vJP-wZ6hGBg-unsplash.png) center / cover no-repeat', height: '150px', borderRadius: '10px'}}/>
                                <div className="card-body">
                                    <h4 className="card-title" style={{fontFamily: 'Poppins, sans-serif'}}>Recent Article 4</h4><button class="btn btn-primary" type="button" style={{fontFamily: 'Poppins, sans-serif'}}>Button</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default Blog;
