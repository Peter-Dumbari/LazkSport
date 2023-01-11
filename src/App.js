import React, { useState, useEffect } from "react";
import NavbarPage from "./Components/NavbarPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Leagues from "./Pages/Leagues/Leagues";
import Features from "./Pages/Features";
import SubscriptionPage from "./Components/SubscriptionPage";
import { useAuth } from "./firebase-configuration";
import Fullnews from "./Pages/FullNews/Fullnews";
import Livescore from "./Pages/LivescorePage/Livescore";

export default function App() {
  const [usersName, setUsersName] = useState();
  const [profilePic, setProfilePic] = useState();
  const CurrentUsers = useAuth();

  return (
    <>
      <Router>
        {CurrentUsers && (
          <NavbarPage profilePicture={profilePic} usersName={usersName} />
        )}
        {!CurrentUsers ? (
          <Routes>
            <Route
              path="/"
              exact
              element={
                <SubscriptionPage
                  setProfilePic={setProfilePic}
                  setUsersName={setUsersName}
                />
              }
            />
            <Route path="/fullnews/:newsid" element={<Fullnews />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/home" exact element={<HomePage />} />
            <Route path="/leagues" element={<Leagues />} />
            <Route path="/livescore" element={<Livescore />} />
            <Route path="/features" element={<Features />} />
            <Route path="/users" element={<users />} />
          </Routes>
        )}
      </Router>
    </>
  );
}
