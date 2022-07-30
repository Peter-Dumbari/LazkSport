import React from "react";
import NavbarPage from "./Components/NavbarPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Leagues from "./Pages/Leagues";
import Livescores from "./Pages/Livescores";
import Livescore from "./Pages/Livescores2";
import Features from "./Pages/Features";

export default function App() {
  return (
    <>
      <Router>
        <NavbarPage />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/leagues" component={Leagues} />
          <Route path="/livescores" component={Livescores} />
          <Route path="/livescoresPage" component={Livescore} />
          <Route path="/features" component={Features} />
        </Switch>
      </Router>
    </>
  );
}
