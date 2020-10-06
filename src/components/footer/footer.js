import React, { Component } from 'react';
import './footer.css';
import FooterLogo from '../../assets/sat-white.png';
import FaAngleUp from './gotopbutton.js';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      //uses MDBootstrap in some parts
      <footer
        style={{
          background: 'linear-gradient(90deg, #df4722, #d90b74)',
          fontFamily: 'Kumbh Sans',
        }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-md-2 footer-about">
                <img alt="footer" src={FooterLogo} />
              </div>
              <div
                className="col-md-4 footer-about"
                style={{ marginBottom: '30px' }}
              >
                <p style={{ color: 'rgb(255,255,255)' }}>
                Satriaana is an independent and transparent open-source community and an organization that respects the privacy of people. We aim to filter open-source projects for authenticity, while helping other open-source volunteer startups to rise. Anyone can volunteer for us as we're a volunteer based community and an organization.
                </p>
              </div>
              <div
                className="col-md-4 footer-contact"
                style={{ marginBottom: '30px' }}
              >
                <h3 style={{ color: 'rgb(255,255,255)' }}>Contact</h3>
                <p>
                  <i className="fas fa-map-marker-alt"></i> Lorem ipsum dolor
                  sit amet
                </p>
                <p>
                  <i className="fas fa-phone"></i> Phone: 011 123 45 67
                </p>
                <p>
                  <i className="fas fa-envelope"></i> Email:{' '}
                  <a href="mailto:lorem@ipsum.com">test@satriaana.org</a>
                </p>
                <p>
                  <i className="fab fa-firefox"></i> Mozilla Community:
                  Satriaana
                </p>
              </div>
              <div className="col-md-2 footer-links">
                <div className="row">
                  <div className="col">
                    <h3 style={{ color: 'rgb(255,255,255)' }}>Site Map</h3>
                  </div>
                </div>
                <div className="row footer-items">
                  <div className="col-md-12">
                    <p>
                    <Link style={{ textDecoration: 'none' }} to="/Satriaana-Web-Site">
                      <a href="/Satriaana-Web-Site">Home</a>
                      </Link>
                    </p>
                    <p>
                      <a href="https://blog.satriaana.org">Blog</a>
                    </p>
                    <p>
                      <a href="https://forum.satriaana.org">Forum</a>
                    </p>
                    <p>
                    <Link style={{ textDecoration: 'none' }} to="/about">
                      <a href="/about">About</a>
                      </Link>
                    </p>
                    <p>
                    <Link style={{ textDecoration: 'none' }} to="/contact">
                      <a href="/contact">Contact</a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <hr style={{ marginBottom: '25px' }} />

          <div className="row">
            <div className="col-md-6 footer-copyright">
              <p
                id="copyright"
                style={{ fontFamily: 'Kumbh Sans', color: 'rgb(255,255,255)' }}
              >
                &copy; 2020 <b>Satriaana</b>. All Rights Reserved.
              </p>
            </div>
            <div className="col-md-6 footer-bottom">
              <div className="footer-social" style={{ float: 'right' }}>
                <a href="https://www.facebook.com/Satriaana-108832284248709">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/Satriaana2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/satriaana-open-script-b9543a1b3">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/satriaanascript/?hl=en">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://medium.com/@openscriptprivacy">
                  <i className="fab fa-medium"></i>
                </a>
                <a href="https://www.reddit.com/user/Satiaana">
                  <i className="fab fa-reddit"></i>
                </a>
                <a href="https://github.com/Satriaana">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
        <FaAngleUp/>
        </div>
      </footer>
    );
  }
}

export default Footer;
