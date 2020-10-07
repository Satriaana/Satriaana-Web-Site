import React from "react";

import Header from "../../components/header/header";
import Newsletter from "../../components/newslettter/newsletter";
import Footer from "../../components/footer/footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
      <Newsletter />
      <Footer />
    </div>
  );
};
