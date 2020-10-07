import React, { Component } from "react";

//components
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

//app home
// const Home = () => {
//   return (
//     <>
//       <Cover />
//       <Carousel />
//       <Titleintroduction />
//       <Blog />
//       <Forum />
//       <Twitter />
//     </>
//   );
// };

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <DefaultLayout>
          <Switch>
            <Route
              exact
              true
              path="/"
              render={() => <div>Render home page</div>}
            />
            <Route path="/contact" exact component={Contact} />
            <Route path="/about" exact component={About} />

            {/* Create a 404 Page If route not found,
            currently being Redirected to Home Page */}
            <Route
              path="/"
              render={() => <Redirect to={{ pathname: "/" }} />}
            />
          </Switch>
        </DefaultLayout>
      </Router>
    );
  }
}

export default App;
