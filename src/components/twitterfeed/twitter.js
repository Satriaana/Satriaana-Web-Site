import React, { Component } from "react";
// import {
//   TwitterTimelineEmbed,
//   TwitterFollowButton,
// } from "react-twitter-embed";

import "./twitter.css";

class Twitter extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f2f2f2", fontFamily: "Kumbh Sans" }}>
        <div className="container">
          <h1
            style={{
              fontSize: '40px',
              fontFamily: 'Kumbh Sans',
              fontWeight: 'bold',
              marginBottom: '30px'
            }}
          >
            See What's Happening...
              </h1>

          <div>
            <iframe class="twitterWidget" allowfullscreen id="wallsio-iframe" src="https://my.walls.io/m4xg7?nobackground=1&amp;show_header=0" width="100%" height="600px" border="0" loading="lazy" title="My social wall"></iframe>
          </div>


        </div>
      </div>
    );
  }
}
export default Twitter;
