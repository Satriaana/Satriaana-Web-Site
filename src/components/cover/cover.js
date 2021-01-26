import React, { Component } from "react";
// import "./cover.css";

class Cover extends Component {
  render() {
    return (
      <div className="cover px-5">
        <div className="container p-4">
          <div class="row">
            <div class="col-lg-8 text-lg-left">
              <h4
                style={{
                  fontWeight: "bold",
                }}
              >
                We are calling for volunteers to help with community projects
              </h4>
            </div>
            <div class="col-lg-4">
              <a
                href="https://satriaana.typeform.com/to/XYGqfnkI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary" type="button" style={{fontWeight: "bold"}}>
                  Join Satriaana
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cover;
