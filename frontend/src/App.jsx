import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Welcome from "./pages/Welcome";
import { UserDataContext } from "./context/UserContext";
import SessionWrapper from "./pages/SessionWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainWelcome from "./pages/CaptainWelcome";
import CaptainSessionWrapper from "./pages/CaptainSessionWrapper";
import CaptainLogout from "./pages/CaptainLogout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/welcome"
          element={
            <SessionWrapper>
              <Welcome />
            </SessionWrapper>
          }
        />
        <Route
          path="/users/logout"
          element={
            <SessionWrapper>
              <UserLogout />
            </SessionWrapper>
          }
        />
        <Route
          path="/captain-welcome"
          element={
            <CaptainSessionWrapper>
              <CaptainWelcome />
            </CaptainSessionWrapper>
          }
        />
        <Route
          path="/captains/logout"
          element={
            <CaptainSessionWrapper>
              <CaptainLogout />
            </CaptainSessionWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
