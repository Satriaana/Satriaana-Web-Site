import React from "react";

import styles from "./Section.module.css";

export const Section = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
