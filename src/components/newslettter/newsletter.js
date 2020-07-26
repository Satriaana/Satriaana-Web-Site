import React, { Component } from "react";
import "./newsletter.css";

class Newsletter extends Component {
    render(){
        return(
            <div className="newsletter-subscribe">
				<div className="container">
                    <div className="row">
                            <div className="col-md-7">
                                <div class="intro">
                                    <h2 class="text-left">Subscribe for our Newsletter</h2>
                                    <p class="text-left">Subscribe to our newsletter to get in touch with us</p>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <form method="post">
                                    <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Your Email"></input></div>
                                    <div class="form-group"><button class="btn btn-primary" type="submit">Subscribe </button></div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newsletter;
