import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Section.module.css";

export const Section = ({ children, hasBackgroundGradient }) => {
  return (
    <section
      className={classnames(
        styles.container,
        hasBackgroundGradient ? styles.backgroundGradient : ""
      )}
    >
      {children}
    </section>
  );
};

Section.defaultProps = {
  hasBackgroundGradient: false,
};

Section.propTypes = {
  children: PropTypes.element.isRequired,
  hasBackgroundGradient: PropTypes.bool,
};
