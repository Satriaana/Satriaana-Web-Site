import React from "react";

import QuestionList from "./questionsList";

export default function Questions() {
  return (
    <div className="container-fluid p-5">
      <div className="row px-lg-5 text-left">
        <div className="col-md-12" style={{ textAlign: "start" }}>
          <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>
            Frequently Asked Questions
          </h2>
        </div>
        <QuestionList />
      </div>
    </div>
  );
}
