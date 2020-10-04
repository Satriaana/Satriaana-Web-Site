import React from 'react';

import QuestionList from './questionsList';

export default function Questions() {
  return (
    <div className="container">
      <div className="col-md-12" style={{ textAlign: 'start' }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: '30px' }}>
          Frequently Asked Questions
        </h2>
      </div>
      <QuestionList />
    </div>
  );
}
