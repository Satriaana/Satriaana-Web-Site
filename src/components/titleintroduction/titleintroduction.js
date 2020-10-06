import React, { Component } from 'react';
import './titleintroduction.css';
import cardImgSrc from '../../assets/arif-riyanto-vJP-wZ6hGBg-unsplash.png';

class Titleintroduction extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: '10px', marginBottom: '10px' }}
      >
        <div className="row">
          <div className="col-md-12" style={{ marginBottom: '16px' }}>
            <h1
              style={{
                fontSize: '40px',
                fontFamily: 'Kumbh Sans',
                fontWeight: 'bold',
              }}
            >
              Privacy & Security are like eating and breathing as it is one of life’s basic requirements.
            </h1>
            <p
              style={{
                fontSize: '21px',
                fontFamily: 'Kumbh Sans',
                color: '#21262b',
              }}
            >
              We are a group of individuals with a concern for how less private
              and proprietary the digital world is.&nbsp;
              <br />
              We strive to change that.
              <br />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ borderRadius: '10px' }}>
              <img
                className="card-img w-100 d-block"
                src={cardImgSrc}
                style={{
                  objectFit: 'cover',
                  background:
                    'url(./arif-riyanto-vJP-wZ6hGBg-unsplash.png) center / cover no-repeat',
                  height: '320px',
                  borderRadius: '10px',
                }}
              />
              <div className="card-img-overlay">
                <h4
                  id="cardname"
                  style={{
                    fontSize: '21px',
                    fontFamily: 'Kumbh Sans',
                    color: 'rgb(255,255,255)',
                    fontWeight: 'bold',
                  }}
                >
                  Meet Satriaana
                </h4>
                <p
                  id="cardtitle"
                  style={{
                    fontSize: '16px',
                    fontFamily: 'Kumbh Sans',
                    color: 'rgb(255,255,255)',
                  }}
                >
                  We build the future of open-source
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <p
              id="desc"
              style={{
                fontSize: '21px',
                fontFamily: 'Kumbh Sans',
                marginTop: '16px',
                color: '#21262b',
              }}
            >
              We aim to filter open-source projects for authenticity, &nbsp;
              <br />
              while helping other open-source volunteer startups to rise
              <br />
              <strong
                style={{
                  fontSize: '18px',
                  fontFamily: 'Kumbh Sans',
                  fontWeight: 'bold',
                }}
              >
                <a href="#">Learn More&nbsp;&gt;</a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Titleintroduction;
