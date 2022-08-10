import React from "react";
import NavbarPage from "./Components/NavbarPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Leagues from "./Pages/Leagues";
import Livescores from "./Pages/Livescores";
import Livescore from "./Pages/Livescores2";
import Features from "./Pages/Features";
import Nopage from "./Pages/Nopage";
import SubscriptionPage from "./Components/SubscriptionPage";
import users from "./Pages/users";
import { useAuth } from "./firebase-configuration";

export default function App() {
  const CurrentUsers = useAuth();

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
          <Route path="/users" component={users} />
          <Route path="*" component={Nopage} />
          <Route path="home" component={SubscriptionPage} />
        </Switch>
      </Router>
    </>
  );
}
