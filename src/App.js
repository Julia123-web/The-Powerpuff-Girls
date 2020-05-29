import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import ShowListContainer from "./components/ShowListContainer";
import EpisodeContainer from "./components/EpisodeContainer";

import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={ShowListContainer} />
      <Route exact path="/" component={EpisodeContainer} />
    </Router>
  );
}
export default connect()(App);
