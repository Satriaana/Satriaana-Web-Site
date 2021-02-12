import React, { Component } from "react";
// import "./cover.css";

class Cover extends Component {
  render() {
    return (
      <div className="cover px-5">
        <div className="container p-4">
          <div class="row d-flex flex-row w-100 justify-content-center">
            <div class="col-lg-6 text-lg-left">
              <h4
                style={{
                  fontWeight: "bold",
                }}
              >
                Join our Telegram channel to stay connected
              </h4>
            </div>
            <div class="col-lg-1">
              <a
                href="https://t.me/satriaana"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <button className="btn btn-primary" type="button" style={{fontWeight: "bold"}}>
                  Subscribe
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
