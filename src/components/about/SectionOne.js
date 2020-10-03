import React from "react";
import classnames from "classnames";
import "./SectionOne.css";

const SectionOne = () => {
  return (
    <div className={classnames("sectionContainer", "sec-one")}>
      <h2 style={{fontWeight: 'bold'}}>About Satriaana,</h2>
      <h5>
      Satriaana is an independent and transparent open-source community/ organization that respects the privacy of people. We aim to filter open-source projects for authenticity, while helping other open-source volunteer startups to rise. Anyone can volunteer for us as we're a volunteer based community/ organization.
      </h5>
    </div>
  );
};

export default SectionOne;
