import React, { Component } from 'react';
import './cover.css';

class Cover extends Component {
  render() {
    return (
      <div className="cover">
        <div className="container-fluid">
          <h4
            style={{
              fontFamily: 'Kumbh Sans',
              fontWeight: 'bold',
              paddingTop: '30px',
              paddingBottom: '25px',
              marginBottom: '0',
            }}
          >
            Interested in Joining Satriaana as a Volunteer?&nbsp;&nbsp;&nbsp;
            <a
              href="https://satriaana.typeform.com/to/XYGqfnkI"
              target="_blank"
            >
              <button className="btn btn-primary" type="button">
                Get started
              </button>
            </a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Cover;
