import { React, useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const SessionWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
  } else {
    return <>{children}</>;
  }
};

export default SessionWrapper;
