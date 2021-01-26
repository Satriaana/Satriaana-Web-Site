import React, { Component } from "react";
// import './forum.css';

class Forum extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid p-5">
          <div class="row px-lg-5 py-5 text-left">
            <div class="col-lg-9 px-5">
              <h1
                id="title"
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Collaborate, Communicate, Create.
              </h1>
              <p
                class="py-4"
                style={{
                  fontSize: "21px",
                }}
              >
                A place to get together as a community and collaborate to build
                a better future for open-source
              </p>
            </div>
            <div class="col-lg-3 px-5 px-lg-5 d-flex justify-content-lg-end">
              <a
                href="https://forum.satriaana.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="btn btn-primary"
                  id="btn"
                  type="button"
                  style={{ fontWeight: "bold" }}
                >
                  Visit Our Forum
                </button>
              </a>
            </div>
          </div>
          <div class="row px-lg-5 text-left">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-header">Featured</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-header">Featured</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card">
                <div class="card-header">Featured</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forum;
