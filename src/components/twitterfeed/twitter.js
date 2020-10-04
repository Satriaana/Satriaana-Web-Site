import React, { Component } from "react";
import {
  TwitterTimelineEmbed,
  TwitterFollowButton,
} from "react-twitter-embed";

class Twitter extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#e9e9e9", fontFamily: "Kumbh Sans" }}>
        <div className="container">
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-md-12">
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                See What's Happening...
              </h1>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
              <TwitterFollowButton screenName={"Satriaana2"} />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Satriaana2"
              options={{ height: 500, width: 600 }}
              noBorders={true}
              noFooter={true}
              noHeader={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Twitter;
