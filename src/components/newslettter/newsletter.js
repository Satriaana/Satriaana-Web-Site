import React, { Component } from 'react';
import './newsletter.css';

class Newsletter extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#222f3a',
          fontFamily: 'Kumbh Sans',
          color: 'rgb(255,255,255)',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1>
                <strong>Subscribe to our Newsletter</strong>
                <br />
              </h1>

              <p>
                Stay in touch for new updates&nbsp;
                <br />
                Don't worry, we won't be spamming you
                <br />
              </p>
              <input
                type="text"
                placeholder="&nbsp;&nbsp;&nbsp;Email address"
                style={{
                  fontSize: '18px',
                  marginRight: '10px',
                  marginTop: '20px',
                  height: '38px',
                  width: '260px',
                }}
              />
              <button
                className="btn btn-primary"
                type="button"
                style={{ marginTop: '7px', marginBottom: '9px', height: '38px', width: '120px' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsletter;
