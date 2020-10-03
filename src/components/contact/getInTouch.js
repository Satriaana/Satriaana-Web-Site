import React from 'react';

import './contact.css';

export default function GetInTouch() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12" style={{ textAlign: 'start' }}>
          <h1 className="get-in-touch-bold">Get in touch</h1>
          <p className="get-in-touch-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <button className="btn btn-primary" style={{ marginBottom: '30px' }}>
            Ask help in Community Forum
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12" style={{ textAlign: 'start' }}>
          <h4 className="get-in-touch-bold">Email us</h4>
          <p className="get-in-touch-desc">contact@satraana.org</p>

          <h4 className="get-in-touch-bold">Call us</h4>
          <p className="get-in-touch-desc">+94 123 456 789</p>
          <p className="get-in-touch-desc">+94 123 456 789</p>
        </div>
      </div>
    </div>
  );
}
