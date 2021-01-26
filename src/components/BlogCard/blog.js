import React, { Component } from "react";
import "./blog.css";
import article1ImgSrc from "../../assets/john-schnobrich-FlPc9_VocJ4-unsplash.png";
import article2ImgSrc from "../../assets/nordwood-themes-bJjsKbToY34-unsplash.png";
import article4ImgSrc from "../../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.png";
import { StoreMallDirectory } from "@material-ui/icons";

class Blog extends Component {
  state = {
    loading: true,
    post: null,
  };

  async componentDidMount() {
    const url =
      "https://blog.satriaana.org/ghost/api/v3/content/posts/?key=9d2f6dd7d77e72500a93580748";
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data[0]);

    this.setState({ post: data, loading: false });
    // var i;
    // for (i = 0; i < 5; ++i) {
    //     this.setState({ post: data[i], loading: false });
    //     console.log({ post: data[0], loading: false });
    //     document.getElementById("slug_" + i).innerHTML = this.state.post.name;
    //     document.getElementById("link_" + i).href = this.state.post.permalink;
    //     document.getElementById("content_" + i).innerHTML = this.state.post.prices.currency_code+": "+ (Math.round(this.state.post.prices.price) /100).toFixed(2);
    //     console.log({ post: data[i], loading: false });

    // }

    // console.log({ post: data, loading: false });
    console.log(this.state.post.posts[0]);
  }

  render() {
    return (
      <div style={{ background: "linear-gradient(90deg, #df4722, #d90b74)" }}>
        <div className="container-fluid p-5">
          <div class="row px-lg-5 py-5 text-left">
            <div class="col-lg-9 px-5">
              <h1
                id="title"
                style={{
                  color: "rgb(255,255,255)",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Innovating for a Safer Digital World
              </h1>
              <p
                class="py-4"
                style={{
                  fontSize: "21px",
                  color: "rgb(255,255,255)",
                }}
              >
                A platform to voice the issues you encounter in the technical
                world and share your knowledge driving the communication
                evolution
              </p>
            </div>
            <div class="col-lg-3 px-5 px-lg-5 d-flex justify-content-lg-end">
              <a
                href="https://blog.satriaana.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="btn btn-primary"
                  id="btn"
                  type="button"
                  style={{ fontWeight: "bold" }}
                >
                  Visit Our Blog
                </button>
              </a>
            </div>
          </div>

          <div className="row px-lg-5 text-left">
            <div class="col-sm-6 col-lg-6">
              <div class="card" style={{ fontWeight: "bold" }}>
                {this.state.post ? (
                  <img
                    src={this.state.post.posts[0].feature_image}
                    class="card-img-top"
                    alt="..."
                    id="spotlightCard"
                  />
                ) : (
                  <img src="" class="card-img-top" alt="..." />
                )}
                <div class="card-body">
                  {this.state.post ? (
                    this.state.post.posts[0].title
                  ) : (
                    <h5 class="card-title">Card title</h5>
                  )}
                  <p class="card-text py-2"></p>

                  {this.state.post ? (
                    <a
                      href={this.state.post.posts[0].url}
                      class="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  ) : (
                    <a href="" class="btn btn-primary">
                      Button
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6">
              <div class="card" style={{ fontWeight: "bold" }}>
                {this.state.post ? (
                  <img
                    src={this.state.post.posts[1].feature_image}
                    class="card-img-top"
                    alt="..."
                  />
                ) : (
                  <img src="" class="card-img-top" alt="..." />
                )}
                <div class="card-body">
                  {this.state.post ? (
                    this.state.post.posts[1].title
                  ) : (
                    <h5 class="card-title">Card title</h5>
                  )}
                  <p class="card-text py-2"></p>

                  {this.state.post ? (
                    <a
                      href={this.state.post.posts[1].url}
                      class="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  ) : (
                    <a href="" class="btn btn-primary">
                      Button
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="row px-lg-5 text-left">
            <div class="col-sm-6 col-lg-4">
              <div class="card" style={{ fontWeight: "bold" }}>
                {this.state.post ? (
                  <img
                    src={this.state.post.posts[2].feature_image}
                    class="card-img-top"
                    alt="..."
                  />
                ) : (
                  <img src="" class="card-img-top" alt="..." />
                )}
                <div class="card-body">
                  {this.state.post ? (
                    this.state.post.posts[2].title
                  ) : (
                    <h5 class="card-title">Card title</h5>
                  )}
                  <p class="card-text py-2"></p>

                  {this.state.post ? (
                    <a
                      href={this.state.post.posts[2].url}
                      class="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  ) : (
                    <a href="" class="btn btn-primary">
                      Button
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card" style={{ fontWeight: "bold" }}>
                {this.state.post ? (
                  <img
                    src={this.state.post.posts[3].feature_image}
                    class="card-img-top"
                    alt="..."
                  />
                ) : (
                  <img src="" class="card-img-top" alt="..." />
                )}
                <div class="card-body">
                  {this.state.post ? (
                    this.state.post.posts[3].title
                  ) : (
                    <h5 class="card-title">Card title</h5>
                  )}
                  <p class="card-text py-2"></p>

                  {this.state.post ? (
                    <a
                      href={this.state.post.posts[3].url}
                      class="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  ) : (
                    <a href="" class="btn btn-primary">
                      Button
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card" style={{ fontWeight: "bold" }}>
                {this.state.post ? (
                  <img
                    src={this.state.post.posts[4].feature_image}
                    class="card-img-top"
                    alt="..."
                  />
                ) : (
                  <img src="" class="card-img-top" alt="..." />
                )}
                <div class="card-body">
                  {this.state.post ? (
                    this.state.post.posts[4].title
                  ) : (
                    <h5 class="card-title">Card title</h5>
                  )}
                  <p class="card-text py-2"></p>

                  {this.state.post ? (
                    <a
                      href={this.state.post.posts[4].url}
                      class="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  ) : (
                    <a href="" class="btn btn-primary">
                      Button
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
