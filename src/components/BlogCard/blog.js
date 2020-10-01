import React, { Component } from "react";
import "./blog.css";

class Blog extends Component {
  render() {
    return (
      <div style={{background: 'linear-gradient(90deg, #df4722, #d90b74)'}}>
        <div className="container" style={{paddingTop: '50px'}}>
            <div className="row">
                <div className="col-md-12" style={{marginBottom: '15px'}}>
                    <h1 style={{color: 'rgb(255,255,255)', fontSize: '40px', fontFamily: 'Kumbh Sans', fontWeight: 'bold'}}>Blog<button class="btn btn-primary float-right" type="button" style={{backgroundColor: 'rgb(248,248,248)', fontFamily: 'Kumbh Sans'}}>Lorem Ipsum</button></h1>
                    <p style={{fontSize: '21px', fontFamily: 'Kumbh Sans', color: 'rgb(255,255,255)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" style={{marginBottom: '25px'}}>
                    <div className="card" style={{borderRadius: '10px'}}><img class="card-img-top w-100 d-block" style={{background: 'url(./john-schnobrich-FlPc9_VocJ4-unsplash.png) center / cover no-repeat', height: '380px', borderRadius: '10px'}}/>
                        <div className="card-body">
                            <h5 className="card-title" style={{fontFamily: 'Kumbh Sans', fontWeight: 'bold'}}>Recent Article 1</h5>
                            <p className="card-text" style={{fontFamily: 'Kumbh Sans'}}>Nullam id dolor id nibh ultricies vehicula ut id elit.&nbsp;</p><button class="btn btn-primary" type="button" style={{fontFamily: 'Kumbh Sans'}}>Discover More</button></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row" style={{marginBottom: '15px'}}>
                        <div className="col">
                            <div className="card" style={{borderRadius: '10px'}}><img class="card-img-top w-100 d-block" style={{background: 'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat', height: '150px', borderRadius: '10px'}}/>
                                <div className="card-body" style={{height: '100px'}}>
                                    <h5 className="card-title" style={{fontFamily: 'Kumbh Sans', fontWeight: 'bold', paddingBottom: 'px', marginBottom: '2px'}}>Recent Article 2</h5><button class="btn btn-primary" type="button" style={{fontFamily: 'Kumbh Sans'}}>Button</button></div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{borderRadius: '10px'}}><img class="card-img-top w-100 d-block" style={{background: 'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat', height: '150px', borderRadius: '10px'}}/>
                                <div className="card-body" style={{height: '100px'}}>
                                    <h5 className="card-title" style={{fontFamily: 'Kumbh Sans', fontWeight: 'bold', paddingBottom: 'px', marginBottom: '2px'}}>Recent Article 3</h5><button class="btn btn-primary" type="button" style={{fontFamily: 'Kumbh Sans'}}>Button</button></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col" style={{marginTop: '10px'}}>
                            <div className="card" style={{borderRadius: '10px'}}><img class="card-img-top w-100 d-block" style={{background: 'url(./arif-riyanto-vJP-wZ6hGBg-unsplash.png) center / cover no-repeat', height: '140px', borderRadius: '10px'}}/>
                                <div className="card-body">
                                    <h5 className="card-title" style={{fontFamily: 'Kumbh Sans', fontWeight: 'bold'}}>Recent Article 4</h5><button class="btn btn-primary" type="button" style={{fontFamily: 'Kumbh Sans'}}>Button</button></div>
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
