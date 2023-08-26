/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// PrivateRoute.js
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import {} from "react-router-dom";
import { useUserContext } from "./UserContext";

const PrivateRoute = () => {
  const { state } = useUserContext();

  return state.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

// const ProtectedRoute = () => {
//   const TOKEN = localStorage.getItem("user-token");

//   // let auth = {'token':false}
//   return TOKEN ? <Outlet /> : <Navigate to="/login" />;
// };

// export default ProtectedRoute;
