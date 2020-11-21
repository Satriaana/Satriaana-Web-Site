import React from "react";

import styles from "./Carousel.module.css";

export const Carousel = ({ image, alt }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} alt={alt} src={image} />
    </div>
  );
};
