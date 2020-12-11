import React, { Component } from "react";
import "./twitter.css";
// import {
//   TwitterTimelineEmbed,
//   TwitterFollowButton,
// } from "react-twitter-embed";





class Twitter extends Component {
  render() {



    return (
      <div style={{ backgroundColor: "#f2f2f2", fontFamily: "Kumbh Sans" }}>
        <div className="container">
          <h1
            style={{
              border: 0,
              height: 50,
              

            }}
          >
            See What's Happening...
              </h1>
          <iframe allowfullscreen id="wallsio-iframe" src="https://my.walls.io/m4xg7?nobackground=1&amp;show_header=0" loading="lazy" title="My social wall"></iframe>

          <div class="taggbox-container" ><script defer src="https://widget.taggbox.com/embed.min.js" type="text/javascript"></script><div class="taggbox-socialwall" data-wall-id="42586" view-url="https://app.taggbox.com/widget/e/42586">  </div></div>



          <div class="elfsight-app-0994baaf-5697-4735-a6d6-8fd3021fc7c3"></div>



        </div>
      </div>
    );

  }
}
export default Twitter;
