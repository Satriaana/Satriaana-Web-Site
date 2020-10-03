import React from 'react';

import QuestionList from './questionsList';

export default function Questions() {
  return (
    <div className="container">
      <div className="col-md-8" style={{ textAlign: "start" }}>
        <h1>Frequently asked questions</h1>
      </div>
      <QuestionList />
    </div>
  )
}
