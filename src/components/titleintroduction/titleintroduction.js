import React, { Component } from "react";
import "./titleintroduction.css";
import cardImgSrc from "../../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.png";

class Titleintroduction extends Component {
  render() {
    return (
      <div className="container-fluid p-5">
        <div className="row px-lg-5 text-left">
          <div className="col-md-12 px-5">
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Privacy & Security are like eating and breathing as it is one of
              life’s basic requirements.
            </h1>
            <p
              style={{
                fontSize: "21px",
                color: "#21262b",
              }}
            >
              We are a group of individuals with a concern for how less private
              and proprietary the digital world is. We strive to change that.
            </p>
          </div>
        </div>

        <div className="row px-lg-5 text-left">
          <div className="col-md-12 px-5 my-5">
            <div className="card" style={{ borderRadius: "10px" }}>
              <img
                className="card-img w-100 d-block"
                src={cardImgSrc}
                alt="title"
                style={{
                  objectFit: "cover",
                  background:
                    "url(./arif-riyanto-vJP-wZ6hGBg-unsplash.png) center / cover no-repeat",
                  height: "320px",
                  borderRadius: "10px",
                }}
              />
              <div className="card-img-overlay">
                <h4
                  className="text-left"
                  style={{
                    fontSize: "21px",
                    fontFamily: "Kumbh Sans",
                    color: "rgb(255,255,255)",
                    fontWeight: "bold",
                  }}
                >
                  Meet Satriaana
                </h4>
                <p
                  id="cardtitle"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Kumbh Sans",
                    color: "rgb(255,255,255)",
                  }}
                >
                  We build the future of open-source
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-lg-5 text-left">
          <div className="col-md-12 px-5">
            <p
            className="text-left"
              style={{
                fontSize: "21px",
                color: "#21262b",
              }}
            >
              We aim to filter open-source projects for authenticity, <br/>while
              helping other open-source volunteer startups to rise
            </p>
            <button
              type="button"
              class="btn btn-link"
              data-mdb-ripple-color="dark"
              style={{ fontWeight: "bold", textDecoration: "none" }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Titleintroduction;
