import React, { Component } from "react";

class Twitter extends Component {
    render(){
        return(
            <div style={{backgroundColor: '#e9e9e9', fontFamily: 'Kumbh Sans'}}>
        <div className="container">
            <div className="row" style={{paddingBottom: '50px'}}>
                <div className="col-md-12">
                    <h1 style={{fontSize: '40px', fontWeight: 'bold', marginBottom: 'px'}}>See What's Happening</h1>
                </div>
            </div>
            <div className="row" style={{paddingBottom: '50px'}}>
                <div className="col-md-3">
                    <div className="card" style={{borderRadius: '10px', marginBottom: '10px'}}>
                        <div className="card-header">
                            <h5 className="mb-0" style={{fontSize: '18px', fontWeight: 'bold', marginTop: '10px'}}>Tweet #1</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text" style={{fontSize: '16px'}}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=Satriaana2&amp;show_screen_name=true&amp;show_count=true"
                                allowtransparency="true" frameborder="0" scrolling="no" title="Follow Satriaana on Twitter" width="100%" height="30"></iframe></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{borderRadius: '10px', marginBottom: '10px'}}>
                        <div className="card-header">
                            <h5 className="mb-0" style={{fontSize: '18px', fontWeight: 'bold', marginTop: '10px'}}>Tweet #2</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text" style={{fontSize: '16px'}}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=Satriaana2&amp;show_screen_name=true&amp;show_count=true"
                                allowtransparency="true" frameborder="0" scrolling="no" title="Follow Satriaana on Twitter" width="100%" height="30"></iframe></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{borderRadius: '10px', marginBottom: '10px'}}>
                        <div className="card-header">
                            <h5 className="mb-0" style={{fontSize: '18px', fontWeight: 'bold', marginTop: '10px'}}>Tweet #3</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text" style={{fontSize: '16px'}}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=Satriaana2&amp;show_screen_name=true&amp;show_count=true"
                                allowtransparency="true" frameborder="0" scrolling="no" title="Follow Satriaana on Twitter" width="100%" height="30"></iframe></div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card" style={{borderRadius: '10px', marginBottom: '10px'}}>
                        <div className="card-header">
                            <h5 className="mb-0" style={{fontSize: '18px', fontWeight: 'bold', marginTop: '10px'}}>Tweet #4</h5>
                        </div>
                        <div className="card-body">
                            <p className="card-text" style={{fontSize: '16px'}}>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p><iframe src="https://platform.twitter.com/widgets/follow_button.html?screen_name=Satriaana2&amp;show_screen_name=true&amp;show_count=true"
                                allowtransparency="true" frameborder="0" scrolling="no" title="Follow Satriaana on Twitter" width="100%" height="30"></iframe></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}
export default Twitter;