import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContent";

const CaptainSignup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    color: "",
    plate: "",
    capacity: "",
    type: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: { firstname: form.firstName, lastname: form.lastName },
      email: form.email,
      password: form.password,
      vehicle: {
        color: form.color,
        plate: form.plate,
        capacity: form.capacity,
        vehicleType: form.type,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-login");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6">
        {/* Logo */}
        <h1 className="text-3xl font-bold mb-6">Uber</h1>

        <form className="space-y-4" onSubmit={handleSignup}>
          {/* First & Last Name Row */}
          <div>
            <label className="text-gray-600 text-sm">What's your name</label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded-md bg-gray-100 focus:outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded-md bg-gray-100 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-gray-600 text-sm">What's your email</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-600 text-sm">Enter Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md bg-gray-100 focus:outline-none"
              required
            />
          </div>

          {/* vehicle color */}
          <div>
            <label className="text-gray-600 text-sm">Vehicle</label>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="color"
                placeholder="color"
                value={form.color}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md bg-gray-100 focus:outline-none"
                required
              />
              <input
                type="text"
                name="plate"
                placeholder="plate"
                value={form.plate}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md bg-gray-100 focus:outline-none"
                required
              />
              <input
                type="text"
                name="capacity"
                placeholder="capacity"
                value={form.capacity}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md bg-gray-100 focus:outline-none"
                required
              />
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md bg-gray-100 focus:outline-none"
                required
              >
                <option value="" hidden>
                  Choose..
                </option>
                <option value="auto">Auto</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="car">Car</option>
              </select>
            </div>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Create Captain Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={"/captain-login"} className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>

        {/* Captain Signup Button */}
        <Link
          to={"/login"}
          className="w-full mt-6 bg-green-600 text-white py-2 block text-center rounded-md hover:bg-green-700 transition"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;
