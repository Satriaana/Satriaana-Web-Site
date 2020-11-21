import React from "react";
import PropTypes from "prop-types";

import styles from "./Avatar.module.css";

export const Avatar = ({ image, name }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={`team member ${name}`} className={styles.image} />
      {name && <p className={styles.name}>{name}</p>}
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
};
