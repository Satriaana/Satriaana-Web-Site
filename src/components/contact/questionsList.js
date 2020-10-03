import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const accordionStyle = {
  width: '100%',
  margin: '26px 0',
  borderRadius: '1rem',
  backgroundColor: '#F2F2F2',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
};

export default function QuestionsList() {
  return (
    <>
      {/* 1 */}
      <Accordion style={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="question-title" style={{ fontWeight: 'normal' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h2>
        </AccordionSummary>

        <AccordionDetails>
          <p className="question-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
        </AccordionDetails>
      </Accordion>

      {/* 2 */}
      <Accordion style={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="question-title" style={{ fontWeight: 'normal' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h2>
        </AccordionSummary>

        <AccordionDetails>
          <p className="question-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
        </AccordionDetails>
      </Accordion>

      {/* 3 */}
      <Accordion style={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="question-title" style={{ fontWeight: 'normal' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h2>
        </AccordionSummary>

        <AccordionDetails>
          <p className="question-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
        </AccordionDetails>
      </Accordion>

      {/* 4 */}
      <Accordion style={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="question-title" style={{ fontWeight: 'normal' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h2>
        </AccordionSummary>

        <AccordionDetails>
          <p className="question-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
