import React from 'react';
import './SectionTwo.css';
import classnames from 'classnames';

const SectionTwo = () => {
  return (
    <div className={classnames('sectionContainer', 'sec-two')}>
      <div className="part">
        <h2 style={{ fontWeight: 'bold', marginRight: '100px' }}>Our Vision</h2>
        <h5>Unbiased transparency and privacy for everyone.</h5>
      </div>
      <hr />
      <div className="part">
        <h2 style={{ fontWeight: 'bold', marginRight: '100px' }}>
          Our Mission
        </h2>
        <h5>
          To bequeath to the society, an independent and transparent open source
          community that questions the authenticity of open source projects and
          helps open source startups to rise, while being a platform where
          people can voice the issues they encounter in the technical world.
        </h5>
      </div>
    </div>
  );
};

export default SectionTwo;
