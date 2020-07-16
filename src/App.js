import React, { Component } from "react";

//components
import Header from "./components/header/header";
import Blog from "./components/BlogCard/blog";
import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
