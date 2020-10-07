import React, { Component } from "react";

//components
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact true path="/" component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />

          {/* Create a 404 Page If route not found,
            currently being Redirected to Home Page */}
          <Route path="/" render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
