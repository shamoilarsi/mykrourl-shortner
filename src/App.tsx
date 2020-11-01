import React from "react";
import Main from "Main";
import HandleRedirect from "HandleRedirect";

import "styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/:shortUrl" exact component={HandleRedirect} />
          <Route path="/" exact component={Main} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
