import React, { Component, useState, useEffect } from "react";

//components
import Header from "./components/header/header";
import Blog from "./components/BlogCard/blog";
import Forum from "./components/ForumCard/forum";
import Footer from "./components/footer/footer";
import Cover from "./components/cover/cover";
import Carousel from "./components/carousell/carousel";
import Twitter from "./components/twitterfeed/twitter";
import Newsletter from "./components/newslettter/newsletter";
import Titleintroduction from "./components/titleintroduction/titleintroduction";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import useTheme from "./components/Services/useTheme";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// New Package 
import storage from 'local-storage-fallback';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




const GlobalStyle = createGlobalStyle`
body{
  background-color:${(props) =>
    props.theme.mode === "dark" ? "	#585858" : "#EEE"};
 color:${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")};
}`;

//app home
const Home = () => {
  return (
    <>
      <Cover />
      <Carousel />
      <Titleintroduction />
      <Blog />
      <Forum />
      <Twitter />
    </>
  );
};

function App() {
  
  const theme = useTheme();
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact true path="/Satriaana-Web-Site" component={Home} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/about" exact component={About} />
            </Switch>
            <Newsletter />
            <Footer />
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
