import React from "react";
import { IoMdContacts } from "react-icons/io";
import { MdCardTravel } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";

const Subfooter = () => {
  return (
    <>
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-lg relative overflow-hidden">
          <div className="relative w-full h-96 md:h-[60vh] lg:h-[80vh]">
            <img
              src="images/download (4).jpeg" // Ensure this image has a transparent background
              alt="Black car"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60"></div>
          </div>
          <div className="flex flex-col justify-center gap-8 md:px-16 px-8 md:my-0 my-8 relative z-10">
            <div className="flex items-center gap-5">
              <span className="shadow-xl text-2xl p-6 rounded-full bg-gray-800 text-yellow-400">
                <MdCardTravel className="text-3xl" />
              </span>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl text-white font-bold">Wedding</h5>
                <p className="mb-4 text-base text-gray-300 border-l-4 border-yellow-400 pl-4">
                  Seeking Wedding Transportation Services? Contact Us to Customize Your Special Day!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="shadow-xl text-2xl p-6 rounded-full bg-gray-800 text-yellow-400">
                <IoCarSport className="text-3xl" />
              </span>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl text-white font-bold">Our Fleet</h5>
                <p className="mb-4 text-base text-gray-300 border-l-4 border-yellow-400 pl-4">
                  Discover the Perfect Ride for Any Event - What’s Your Selection?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="shadow-xl text-2xl p-6 rounded-full bg-gray-800 text-yellow-400">
                <IoMdContacts className="text-3xl" />
              </span>
              <div className="flex flex-col gap-2">
                <h5 className="text-2xl text-white font-bold">About Us</h5>
                <p className="mb-4 text-base text-gray-300 border-l-4 border-yellow-400 pl-4">
                  Discover Unmatched Luxury Travel with Limolux in Melbourne’s Finest Experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between bg-black p-8 lg:p-16">
        <div className="relative lg:w-1/2 lg:pr-16">
          <div className="absolute inset-0 flex flex-col items-start justify-center p-8 lg:p-16 z-10">
            <h1 className="text-5xl font-bold text-yellow-400 mb-4 leading-tight">
              Experience Premium Car Rentals
            </h1>
            <p className="text-lg text-gray-300">
              Discover the ultimate convenience and luxury with our state-of-the-art car booking platform. From elegant sedans to rugged SUVs, our diverse fleet is tailored to meet all your travel needs. Book easily, drive confidently, and enjoy unmatched customer service at your fingertips.
            </p>
          </div>
        </div>
        <div className="relative lg:w-1/2 mt-8 lg:mt-0">
          <img
            src="images/b49818497f7c625a4b09d9ccbb5733c7.png" // Replace with your mobile UI image
            alt="Mobile UI"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Subfooter;
