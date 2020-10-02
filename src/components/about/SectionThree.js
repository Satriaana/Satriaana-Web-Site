import React from "react";
import "./SectionThree.css";
import Member from "../../assets/john-schnobrich-FlPc9_VocJ4-unsplash.png";

const SectionThree = () => {
  return (
    <div>
      <img src={Member} alt="Team member" className="team-mem" />
      <img src={Member} alt="Team member" className="team-mem" />
      <img src={Member} alt="Team member" className="team-mem" />
      <img src={Member} alt="Team member" className="team-mem" />
      <img src={Member} alt="Team member" className="team-mem" />
    </div>
  );
};

export default SectionThree;
