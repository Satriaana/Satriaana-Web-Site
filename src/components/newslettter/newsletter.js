import React, { Component } from "react";
// import "./newsletter.css";

class Newsletter extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#222f3a",
          color: "rgb(255,255,255)",
        }}
      >
        <div className="container-fluid p-5">
          <div className="row px-lg-5 text-left">
            <div class="col-lg-12">
              <div class="d-flex justify-content-between align-items-center flex-column flex-md-row text-center text-md-left">
                <h2 class="flex-fill">
                  Subscribe to our newsletter to stay in touch<br/>
                  Don't worry we won't be spamming you
                </h2>
                <form action="#" class="row flex-fill">
                  <div class="col-lg-8 my-2">
                    {" "}
                    <input
                      type="email"
                      class="form-control px-4 border-0 w-100 text-center text-md-left"
                      id="email"
                      placeholder="Your Email"
                      name="email"
                    />{" "}
                  </div>
                  <div class="col-lg-4 my-2">
                    {" "}
                    <button
                      type="submit"
                      class="btn btn-primary border-0 w-100"
                      style={{fontWeight: "bold"}}
                    >
                      Subscribe
                    </button>{" "}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsletter;
