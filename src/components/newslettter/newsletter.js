import React, { Component } from "react";
import "./newsletter.css";

class Newsletter extends Component {
    render(){
        return(
            <div style={{backgroundColor: '#222f3a', fontFamily: 'Kumbh Sans', color: 'rgb(255,255,255)'}}>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h1><strong>Subscribe for our Newsletter</strong><br/></h1>
                    <p>Get our newsletter to stay in touch&nbsp;<br/>Don't worry, we won't be spamming you<br/></p><input type="text" placeholder="&nbsp;&nbsp;&nbsp;Email address" style={{fontSize: '18px', marginRight: '10px',marginTop: '20px', height: '38px', width: '260px'}}/><button class="btn btn-primary"
                        type="button" style={{marginTop: '7px', marginBottom: '9px', height: '38px', width: '120px'}}>Subscribe</button></div>
            </div>
        </div>
    </div>
        );
    }
}
export default Newsletter;
