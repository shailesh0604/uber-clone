import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-screen">
          <img
            className="w-full h-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt="map"
          />

          <div className="absolute top-4 left-3 w-20">
            <img src="assets/images/logo/logo.png" alt="logo" />
          </div>
          <div className="absolute w-full left-0 bottom-0 p-5 bg-white">
            <h3 className="text-2xl font-semibold">Find the Trip</h3>
            <form action="" className="mt-3 flex flex-col gap-6">
              <div className="">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Add a pickup-location"
                />
              </div>

              <div className="">
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Enter a destination"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
