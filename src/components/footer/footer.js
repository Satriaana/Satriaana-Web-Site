import React, { Component } from "react";
import "./footer.css";
import { CardFooter, Container } from "reactstrap";
import styled from 'styled-components'
//import LinearGradient from 'react-native-linear-gradient'

class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        
      <div className="container-fluid text-center text-md-left">
       <div className="row">
          {/*Colum 1 */}
          <div className="col-md-3 col-sm-6">

            {/* satriaana logo*/}
            <div className="logo">
            <img src="satriaana.png" alt="logo" width="550"
                  height="auto"></img>
                  <h2 className="text">We Aim to Protect your privacy</h2>
            </div>
          </div>
          
          <hr class="clearfix w-100 d-md-none pb-3"></hr>

        {/*Colum 2 */}
        <div className="col-md-3 col-sm-6">
        
          <ul id="footercolum2" className="list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Forum</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
          </ul>

          <div class="col-md-12 py-5">
        <div id="icon" class="mb-5 flex-center">

            {/*github*/}
          <a class="ins-ic">
            <i class="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
           {/*Linkedin */}
           <a class="li-ic">
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          {/* Facebook */}
          <a class="fb-ic">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          {/* Twitter */}
          <a class="tw-ic">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
         
          {/*Instagram*/}
          <a class="ins-ic">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          
        </div>
      </div>
        </div>

      </div>

      {/* footer bittom */}
      <div className="footer-copyright">
    
        <p className="text-xs-ceter">
          &copy;{new Date().getFullYear()} Satriaana All right Reserved.
        </p>
        
      </div>
     </div>

      </div>

    );
  }
}

export default Footer;

