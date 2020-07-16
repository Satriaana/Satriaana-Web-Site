import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
