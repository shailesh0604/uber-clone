import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    setCaptainData({ email: email, password: password });
    setEmail("");
    setPassword("");
    console.log("User Data:", captainData);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold mb-6">Uber</h1>

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="text-gray-600 text-sm">What's your email</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-gray-600 text-sm">Enter Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Join the Uber?{" "}
          <Link
            to={"/captain-signup"}
            className="text-blue-600 hover:underline"
          >
            Register as a Captain
          </Link>
        </p>

        {/* Captain Login */}
        <Link
          to={"/login"}
          className="w-full block text-center mt-6 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
