import React, { Component } from "react";

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

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Header />
        
        <Carousel/>
        <Titleintroduction />
        
        
        <Blog />
        <Forum />
        <Twitter />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default App;
