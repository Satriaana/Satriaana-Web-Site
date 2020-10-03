import React from 'react';
import classnames from 'classnames';

import Member from '../../assets/john-schnobrich-FlPc9_VocJ4-unsplash.png';

import './SectionThree.css';

const teamMembers = [
  {
    name: 'John Doe',
    image: Member,
  },
  {
    name: 'John Doe',
    image: Member,
  },
  {
    name: 'John Doe',
    image: Member,
  },
  {
    name: 'John Doe',
    image: Member,
  },
  {
    name: 'John Doe',
    image: Member,
  }
];

const SectionThree = () => {
  const renderTeam = () => {
    return teamMembers.map(({ image, name }) => (
      <div className="team-mem-container">
        <img src={image} alt={`team member ${name}`} className="team-mem" />
        <div className="team-mem-name">{name}</div>
      </div>
      ));
  }

  return (
    <div className={classnames('sectionContainer', 'sec-three')}>
      <h2 style={{fontWeight: 'bold'}}>Meet our team at Satriaana</h2>
      <div className="team">
        {renderTeam()}
      </div>
    </div>
  );
};

export default SectionThree;
