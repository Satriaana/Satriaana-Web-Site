import React, { Component } from 'react';
import './forum.css';
import forumImage from '../../assets/nordwood-themes-bJjsKbToY34-unsplash.png';

class Forum extends Component {
  render() {
    return (
      <div style={{ fontFamily: 'Kumbh Sans' }}>
        <div className="container" style={{ paddingTop: '50px' }}>
          <div className="row">
            <div className="col-md-12" style={{ marginBottom: '10px' }}>
              <h1
                id="title"
                style={{
                  fontSize: '40px',
                  fontFamily: 'Kumbh Sans',
                  fontWeight: 'bold',
                  marginBottom: '30px'
                }}
              >
                Collaborate, Communicate, Create.
                <button className="btn btn-primary float-right" type="button">
                  Lorem Ipsum
                </button>
              </h1>
              <p
                id="desc"
                style={{
                  fontSize: '21px',
                  fontFamily: 'Kumbh Sans',
                  color: '#21262b',
                }}
              >
                A place to get together as a community and &nbsp;
                <br />
                collaborate to build a better future for open-source
                <br />
              </p>
            </div>
          </div>
          <div className="row" style={{ paddingBottom: '50px' }}>
            <div className="col-md-4">
              <div
                className="card"
                style={{ borderRadius: '10px', marginBottom: '30px' }}
              >
                <img
                  className="card-img w-100 d-block"
                  src={forumImage}
                  style={{
                    objectFit: 'cover',
                    height: '320px',
                    borderRadius: '10px',
                  }}
                />
                <div
                  className="card-img-overlay"
                  style={{
                    background:
                      'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat',
                    borderRadius: '10px',
                  }}
                >
                  <h4
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    Recent Thread #1
                  </h4>
                  <p
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    <a href="#">Visit &gt;</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card"
                style={{ borderRadius: '10px', marginBottom: '30px' }}
              >
                <img
                  className="card-img w-100 d-block"
                  src={forumImage}
                  style={{
                    objectFit: 'cover',
                    height: '320px',
                    borderRadius: '10px',
                  }}
                />
                <div
                  className="card-img-overlay"
                  style={{
                    background:
                      'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat',
                    borderRadius: '10px',
                  }}
                >
                  <h4
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    Recent Thread #2
                  </h4>
                  <p
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    <a href="#">Visit &gt;</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card"
                style={{ borderRadius: '10px', marginBottom: '30px' }}
              >
                <img
                  className="card-img w-100 d-block"
                  src={forumImage}
                  style={{
                    objectFit: 'cover',
                    height: '320px',
                    background:
                      'url(./nordwood-themes-bJjsKbToY34-unsplash.png) center / cover no-repeat',
                    borderRadius: '10px',
                  }}
                />
                <div
                  className="card-img-overlay"
                  style={{ borderRadius: '10px' }}
                >
                  <h4
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    Recent Thread #3
                  </h4>
                  <p
                    style={{
                      color: 'rgb(255,255,255)',
                      textShadow: '0px 0px 1px',
                    }}
                  >
                    <a href="#">Visit &gt;</a>
                  </p>
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
