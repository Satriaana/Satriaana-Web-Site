import React from 'react';

import './contact.css';

export default function GetInTouch() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12" style={{ textAlign: 'start' }}>
          <h1 className="get-in-touch-bold">Get in touch</h1>
          <p className="get-in-touch-desc">
          Dive into our community portal where you can find answers for common questions. If you don’t find what you are looking for, create a new thread and look for the answers with the community.
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
