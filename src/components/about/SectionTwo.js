import React from "react";
import "./SectionTwo.css";
import classnames from 'classnames';

const SectionTwo = () => {
  return (
    <div className={classnames("sectionContainer", "sec-two")}>
      <div className="part">
        <h2>Our Vision</h2>
        <p>
          Lorem ipsum dolor sit amet, et eros labores argumentum duo. Wisi magna
          vel ad, pro ut utinam delicata. Ei ius dolores appareat ocurreret. Id
          diam minimum his, usu possit dictas alterum id. Ei zril periculis est.
        </p>
      </div>
      <hr/>
      <div className="part">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, et eros labores argumentum duo. Wisi magna
          vel ad, pro ut utinam delicata. Ei ius dolores appareat ocurreret. Id
          diam minimum his, usu possit dictas alterum id. Ei zril periculis est.
        </p>
      </div>
    </div>
  );
};

export default SectionTwo;
