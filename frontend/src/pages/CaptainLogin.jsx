import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContent";
import { useNavigate } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {captain, setCaptain} = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const captainData = { email: email, password: password };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/login`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-welcome");
    }
    setEmail("");
    setPassword("");
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
