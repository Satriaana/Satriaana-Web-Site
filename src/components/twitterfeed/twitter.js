import React, { Component } from "react";
// import {
//   TwitterTimelineEmbed,
//   TwitterFollowButton,
// } from "react-twitter-embed";

import "./twitter.css";

class Twitter extends Component {
  render() {
    return (
      // <div style={{ backgroundColor: "#f2f2f2" }}></div>
      <div>
        <div className="container-fluid p-5">
          <div class="row px-lg-5 text-lg-left text-sm-center">
            <h1
              className="px-lg-5"
              style={{
                fontSize: "40px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              See What's Happening
            </h1>

            <div>
              <iframe
                class="twitterWidget"
                allowfullscreen
                id="wallsio-iframe"
                src="https://my.walls.io/m4xg7?nobackground=1&amp;show_header=0"
                width="100%"
                height="600px"
                border="0"
                loading="lazy"
                title="My social wall"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Twitter;
