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
import OpeningNav from "./Components/OpeningNav/OpeningNav";
import Fullnews from "./Pages/FullNews/Fullnews";

export default function App() {
  const CurrentUsers = useAuth();

  return (
    <>
      <Router>
        {CurrentUsers ? <NavbarPage /> : null}
        {!CurrentUsers ? (
          <Switch>
            <Route path="/welcome" exact component={SubscriptionPage} />
            <Route path="/fullnews/:newsid" component={Fullnews} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/leagues" component={Leagues} />
            <Route path="/livescores" component={Livescores} />
            <Route path="/livescoresPage" component={Livescore} />
            <Route path="/features" component={Features} />
            <Route path="/users" component={users} />
          </Switch>
        )}
      </Router>
    </>
  );
}
