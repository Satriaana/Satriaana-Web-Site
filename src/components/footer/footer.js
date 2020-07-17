import React, { Component } from "react";
import "./footer.css";
import { CardFooter } from "reactstrap";
import styled from 'styled-components'

class Footer extends Component {
  render() {
    return (
      <div className="main-footer">
        <div className="footer-middle">
      <div className="container">
       <div className="row">
          {/*Colum 1 */}
          <div className="col-md-3 col-sm-6">
          <ul className="list-unstyled">
            <li><img src="satriaana.png" alt="logo" width="150"
                  height="auto"></img></li>
            <li>Satriaana we code for Open-Privacy
              
            </li>
          </ul>

        </div>

        {/*Colum 2 */}
        <div className="col-md-3 col-sm-6">
        
          <ul className="list-unstyled">
            <li>Home</li>
            <li>Blog</li>
            <li>Forum</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* footer bittom */}
      <div className="footer-bottom">
        <p className="text-xs-ceter">
          &copy;{new Date().getFullYear()} Satriaana All right Reserved.
        </p>
      </div>


      </div>
      </div>

      </div>

    );
  }
}

export default Footer;

const FooterContainer = styled.footer
