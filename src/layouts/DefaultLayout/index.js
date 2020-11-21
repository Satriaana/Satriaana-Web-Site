import React from "react";

import styles from "./DefaultLayout.module.css";

import Header from "../../components/header/header";
import Newsletter from "../../components/newslettter/newsletter";
import Footer from "../../components/footer/footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
};
