import React, { Component } from 'react';
import './blog.css';
import article1ImgSrc from '../../assets/john-schnobrich-FlPc9_VocJ4-unsplash.png';
import article2ImgSrc from '../../assets/nordwood-themes-bJjsKbToY34-unsplash.png';
import article4ImgSrc from '../../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.png';

class Blog extends Component {
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
                <button
                  className="btn btn-primary float-right"
                  type="button"
                  style={{
                    backgroundColor: 'rgb(248,248,248)',
                    fontFamily: 'Kumbh Sans',
                  }}
                >
                  Lorem Ipsum
                </button>
              </h1>
              <p
                id="desc"
                style={{
                  fontSize: '21px',
                  fontFamily: 'Kumbh Sans',
                  color: 'rgb(255,255,255)',
                }}
              >
                
                <br/>A platform to voice the issues you encounter in the technical world and share your knowledge driving the communication evolution
                <br />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" style={{ marginBottom: '30px' }}>
              <div className="card" style={{ borderRadius: '10px' }}>
                <img
                  className="card-img-top w-100 d-block"
                  src={article1ImgSrc}
                  style={{
                    objectFit: 'cover',
                    background:
                      'url(./john-schnobrich-FlPc9_VocJ4-unsplash.png) center / cover no-repeat',
                    height: '402.5px',
                    borderRadius: '10px',
                  }}
                />

                <div className="card-body" style={{ height: '150px' }}>
                  <h5
                    className="card-title"
                    style={{
                      fontFamily: 'Kumbh Sans',
                      fontWeight: 'bold',
                      marginBottom: '2px',
                    }}
                  >
                    Recent Article 1
                  </h5>
                  <p className="card-text" style={{ fontFamily: 'Kumbh Sans' }}>
                    Nullam id dolor id nibh ultricies vehicula ut id elit.&nbsp;
                  </p>
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{ fontFamily: 'Kumbh Sans' }}
                  >
                    Discover More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row" style={{ marginBottom: '20px' }}>
                <div className="col">
                  <div className="card" style={{ borderRadius: '10px' }}>
                    <img
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

                    <div className="card-body" style={{ height: '110px' }}>
                      <h5
                        className="card-title"
                        style={{
                          fontFamily: 'Kumbh Sans',
                          fontWeight: 'bold',
                          marginBottom: '2px',
                        }}
                      >
                        Recent Article 2
                      </h5>
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{ fontFamily: 'Kumbh Sans' }}
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ borderRadius: '10px' }}>
                    <img
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

                    <div className="card-body" style={{ height: '110px' }}>
                      <h5
                        className="card-title"
                        style={{
                          fontFamily: 'Kumbh Sans',
                          fontWeight: 'bold',
                          marginBottom: '2px',
                        }}
                      >
                        Recent Article 3
                      </h5>
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{ fontFamily: 'Kumbh Sans' }}
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col" style={{ marginTop: '10px' }}>
                  <div className="card" style={{ borderRadius: '10px' }}>
                    <img
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

                    <div className="card-body" style={{ height: '115px' }}>
                      <h5
                        className="card-title"
                        style={{
                          fontFamily: 'Kumbh Sans',
                          fontWeight: 'bold',
                          marginBottom: '2px',
                        }}
                      >
                        Recent Article 4
                      </h5>
                      <button
                        className="btn btn-primary"
                        type="button"
                        style={{ fontFamily: 'Kumbh Sans' }}
                      >
                        Button
                      </button>
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
