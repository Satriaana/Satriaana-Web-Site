import React from 'react';
import './About.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Aboutcarousell from './aboutcover';

const About = () => {
  return (
    <>
      <Aboutcarousell />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default About;
