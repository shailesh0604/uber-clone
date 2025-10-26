import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="h-screen bg-amber-200 w-100 max-w-full mx-auto relative">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/assets/images/banner/uber.png"
          className="w-full h-full object-cover"
          alt="uber"
        />
      </div>

      <div className="flex items-end h-full">
        <div className="bg-white relative z-10 w-full px-3 pt-6 pb-20">
          <h3 className="text-2xl font-bold mb-5">Get started with Uber</h3>
          <button className="bg-black cursor-pointer text-white flex justify-center items-center gap-2 py-3 w-[95%] mx-auto text-xl rounded-md">
            <span>Continue</span>
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
