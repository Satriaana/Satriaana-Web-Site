import React, { Component } from 'react';
import './blog.css';
import article1ImgSrc from '../../assets/john-schnobrich-FlPc9_VocJ4-unsplash.png';
import article2ImgSrc from '../../assets/nordwood-themes-bJjsKbToY34-unsplash.png';
import article4ImgSrc from '../../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.png';
import { StoreMallDirectory } from '@material-ui/icons';

class Blog extends Component {

  state = {
    loading: true,
    post: null
  };

  async componentDidMount() {





    const url = "https://blog.satriaana.org/ghost/api/v3/content/posts/?key=9d2f6dd7d77e72500a93580748";
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
      <div style={{ background: 'linear-gradient(90deg, #df4722, #d90b74)' }}>
        <div className="container" style={{ paddingTop: '50px' }}>
          <div className="row">
            <div className="col-md-12" style={{ marginBottom: '15px' }}>
              <h1
                id="title"
                style={{
                  color: 'rgb(255,255,255)',
                  fontSize: '40px',
                  fontFamily: 'Kumbh Sans',
                  fontWeight: 'bold',
                }}
              >
                Innovating for a Safer Digital World
                <a href="https://blog.satriaana.org" target="_blank"><button
                  className="btn btn-primary float-right"
                  id="btn"
                  type="button"
                  style={{
                    backgroundColor: 'rgb(248,248,248)',
                    fontFamily: 'Kumbh Sans',
                  }}
                >
                  Our Blog
                </button></a>
              </h1>
              <p
                id="desc"
                style={{
                  fontSize: '21px',
                  fontFamily: 'Kumbh Sans',
                  color: 'rgb(255,255,255)',
                }}
              >

                <br />A platform to voice the issues you encounter in the technical world and share your knowledge driving the communication evolution
                <br />
              </p>
            </div>
          </div>





          <div className="row">
            <div className="col-md-6" style={{ marginBottom: '30px' }}>

              {/* ----post Divider--- */}
              <div className="card" style={{ borderRadius: '10px' }}>


                {
                  this.state.post
                    ? <img
                      className="card-img-top w-100 d-block"
                      src={this.state.post.posts[0].feature_image}
                      style={{
                        objectFit: 'cover',
                        background:
                          'url(https://blog.satriaana.org/content/images/2021/01/satWhatsappArticle-01-3.png) center / cover no-repeat',
                        height: '402.5px',
                        borderRadius: '10px',
                      }}
                    />
                    : <img
                      className="card-img-top w-100 d-block"
                      src={article1ImgSrc}
                      style={{
                        objectFit: 'cover',
                        background:
                          'url(https://blog.satriaana.org/content/images/2021/01/satWhatsappArticle-01-3.png) center / cover no-repeat',
                        height: '402.5px',
                        borderRadius: '10px',
                      }}
                    />
                }



                <div className="card-body" style={{ height: '150px' }}>
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: 'Kumbh Sans',
                      fontWeight: 'bold',
                      marginBottom: '2px',
                    }}
                  >
                    {
                      this.state.post
                        ? this.state.post.posts[0].title
                        : <p id="text">Article 1</p>
                    }
                  </h5>

                  {
                    this.state.post
                      ? <a href={this.state.post.posts[0].url} target="_blank" ><button
                        className="btn btn-primary"
                        id="btn"
                        type="button"
                        style={{ fontFamily: 'Kumbh Sans' }}
                      >
                        Discover More
                          </button></a>
                      : <a href="" ><button
                        className="btn btn-primary"
                        id="btn"
                        type="button"
                        style={{ fontFamily: 'Kumbh Sans' }}
                      >
                        Discover More
                          </button></a>
                  }

                </div>
              </div>
            </div>

            {/* ----post Divider--- */}
            <div className="col-md-6">
              <div className="row" style={{ marginBottom: '20px' }}>
                <div className="col">
                  <div className="card" id="smallCard" style={{ borderRadius: '10px' }}>


                    {
                      this.state.post
                        ? <img
                          className="card-img-top w-100 d-block"
                          src={this.state.post.posts[1].feature_image}
                          style={{
                            objectFit: 'cover',
                            background:
                              'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat',
                            height: '145px',
                            borderRadius: '10px',
                          }}
                        />
                        : <img
                          className="card-img-top w-100 d-block"
                          src={article1ImgSrc}
                          style={{
                            objectFit: 'cover',
                            background:
                              'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat',
                            height: '145px',
                            borderRadius: '10px',
                          }}
                        />
                    }



                    <div className="card-body" style={{ height: '110px' }}>
                      <h5
                        className="card-title"
                        style={{
                          fontFamily: 'Kumbh Sans',
                          fontWeight: 'bold',
                          fontSize: '16px',
                          marginBottom: '2px',
                        }}
                      >
                        {
                          this.state.post
                            ? this.state.post.posts[1].title
                            : <p id="text">Please sign in.</p>
                        }
                      </h5>
                      {
                        this.state.post
                          ? <a href={this.state.post.posts[1].url} target="_blank" ><button
                            className="btn btn-primary"
                            id="btn"
                            type="button"
                            style={{ fontFamily: 'Kumbh Sans' }}
                          >
                            Discover More
                          </button></a>
                          : <a href="" ><button
                            className="btn btn-primary"
                            id="btn"
                            type="button"
                            style={{ fontFamily: 'Kumbh Sans' }}
                          >
                            Discover More
                          </button></a>
                      }

                    </div>
                  </div>
                </div>

                {/* ----post Divider--- */}
                <div className="col">
                  <div className="card" style={{ borderRadius: '10px' }}>

                    {
                      this.state.post
                        ? <img
                          className="card-img-top w-100 d-block"
                          src={this.state.post.posts[2].feature_image}
                          style={{
                            objectFit: 'cover',
                            background:
                              'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat',
                            height: '145px',
                            borderRadius: '10px',
                          }}
                        />
                        : <img
                          className="card-img-top w-100 d-block"
                          src={article2ImgSrc}
                          style={{
                            objectFit: 'cover',
                            background:
                              'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat',
                            height: '145px',
                            borderRadius: '10px',
                          }}
                        />
                    }




                    <div className="card-body" style={{ height: '110px' }}>
                      <h5
                        className="card-title"
                        style={{
                          fontFamily: 'Kumbh Sans',
                          fontWeight: 'bold',
                          fontSize: '16px',
                          marginBottom: '2px',
                        }}
                      >
                        {
                          this.state.post
                            ? this.state.post.posts[2].title
                            : <p id="text">Please sign in.</p>
                        }
                      </h5>



                      {
                        this.state.post
                          ? <a href={this.state.post.posts[2].url} target="_blank" ><button
                            className="btn btn-primary"
                            id="btn"
                            type="button"
                            style={{ fontFamily: 'Kumbh Sans' }}
                          >
                            Discover More
                          </button></a>
                          : <a href="" ><button
                            className="btn btn-primary"
                            id="btn"
                            type="button"
                            style={{ fontFamily: 'Kumbh Sans' }}
                          >
                            Discover More
                          </button></a>
                      }
                    </div>
                  </div>
                </div>
              </div>
              {/* ----post Divider--- */}
              <div className="row">
                <div className="col" style={{ marginTop: '10px' }}>
                  <div className="card" style={{ borderRadius: '10px' }}>

                    {
                      this.state.post
                        ? <img
                          className="card-img-top w-100 d-block"
                          src={this.state.post.posts[3].feature_image}
                          style={{
                            objectFit: 'cover',
                            background:
                              'url(./arif-riyanto-vJP-wZ6hGBg-unsplash.png) center / cover no-repeat',
                            height: '150px',
                            borderRadius: '10px',
                          }}
                        />
                        : <img
                          className="card-img-top w-100 d-block"
                          src={article4ImgSrc}
                          style={{
                            objectFit: 'cover',
                            background:
                              'url(./arif-riyanto-vJP-wZ6hGBg-unsplash.png) center / cover no-repeat',
                            height: '150px',
                            borderRadius: '10px',
                          }}
                        />
                    }


                    <div className="card-body" style={{ height: '115px' }}>
                      <h5
                        className="card-title"
                        style={{
                          fontFamily: 'Kumbh Sans',
                          fontWeight: 'bold',
                          marginBottom: '2px',
                        }}
                      >
                        {
                          this.state.post
                            ? this.state.post.posts[3].title
                            : <p id="text">Please sign in.</p>
                        }
                      </h5>



                      {
                        this.state.post
                          ? <a href={this.state.post.posts[3].url} target="_blank" ><button
                            className="btn btn-primary"
                            id="btn"
                            type="button"
                            style={{ fontFamily: 'Kumbh Sans' }}
                          >
                            Discover More
                          </button></a>
                          : <a href="" ><button
                            className="btn btn-primary"
                            id="btn"
                            type="button"
                            style={{ fontFamily: 'Kumbh Sans' }}
                          >
                            Discover More
                          </button></a>
                      }
                    </div>
                  </div>
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
