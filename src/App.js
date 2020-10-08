import React from "react";
import Portfolio from "./Pages/Portfolio"
import AboutMe from "./Pages/AboutMe"
import Landing from "./Pages/Landing"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Portfolio" component={Portfolio} /> 
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    );
}

export default App;