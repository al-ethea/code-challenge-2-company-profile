import React from "react";
import {
  FaYoutube,
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="h-auto bg-white w-screen py-8">
        {/* Follow Us Heading */}
        <h1 className="text-cp-secondary text-center text-xl md:text-2xl pt-5 font-semibold border-t-2">
          Follow us!
        </h1>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center flex-wrap gap-6 md:gap-10 pt-8 px-4">
          <div className="cursor-pointer">
            <FaYoutube className="text-cp-secondary text-4xl md:text-6xl" />
          </div>
          <div className="cursor-pointer">
            <FaTiktok className="text-cp-secondary text-4xl md:text-6xl" />
          </div>
          <div className="cursor-pointer">
            <FaFacebook className="text-cp-secondary text-4xl md:text-6xl" />
          </div>
          <div className="cursor-pointer">
            <FaInstagram className="text-cp-secondary text-4xl md:text-6xl" />
          </div>
          <div className="cursor-pointer">
            <FaTwitter className="text-cp-secondary text-4xl md:text-6xl" />
          </div>
        </div>
      </div>
    </>
  );
}
