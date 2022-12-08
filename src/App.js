import React, { useState, useEffect } from "react";
import NavbarPage from "./Components/NavbarPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Leagues from "./Pages/Leagues";
import Livescores from "./Pages/Livescores";
import Livescore from "./Pages/Livescores2";
import Features from "./Pages/Features";
import SubscriptionPage from "./Components/SubscriptionPage";
import { useAuth } from "./firebase-configuration";
import Fullnews from "./Pages/FullNews/Fullnews";

export default function App() {
  const [usersName, setUsersName] = useState();
  const [profilePic, setProfilePic] = useState();
  const CurrentUsers = useAuth();

  useEffect(() => {
    setUsersName(localStorage.getItem("UsersName"));
    setProfilePic(localStorage.getItem("ProfilePicture"));
  }, [profilePic, usersName]);

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
            <Route path="/livescores" element={<Livescores />} />
            <Route path="/livescoresPage" element={<Livescore />} />
            <Route path="/features" element={<Features />} />
            <Route path="/users" element={<users />} />
          </Routes>
        )}
      </Router>
    </>
  );
}
