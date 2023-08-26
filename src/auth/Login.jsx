/* eslint-disable no-unused-vars */
// Login.js
import React, { useState } from "react";
import { useUserContext } from "./UserContext";
import { loginUser } from "./api";
import Header from "../components/Header";
import FormExtra from "../components/FormExtra";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { dispatch } = useUserContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser({ email, password });
      dispatch({ type: "LOGIN", payload: user });
      navigate(`/otp`);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-2 space-y-6 flex flex-col">
        <Header
          heading="Login to your account"
          paragraph="Don't have an account yet? "
          linkName="Signup"
          linkUrl="/signup"
        />
        {/* <h2>Login</h2> */}
        <form action="" onSubmit={handleLogin} className="space-y-6">
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FormExtra />
          <button
            style={{ backgroundColor: "#840000" }}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
