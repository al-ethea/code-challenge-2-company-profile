"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { BsHandbag, BsList } from "react-icons/bs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Increased padding to p-5 */}
      <div className="bg-cp-primary border-b-2 w-screen border-b-cp-secondary p-5 flex justify-between items-center text-cp-secondary fixed top-0 left-0 right-0 z-50">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-cp-secondary">
            <BsList className="text-2xl" />
          </button>
        </div>

        {/* Logo - Centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image src="/logo.svg" alt="" height={55} width={50} />
          </Link>
        </div>

        {/* Navigation Links - Hidden on Mobile, Visible on Desktop */}
        <div className="hidden md:flex justify-between items-center space-x-5">
          <Link href="/about-us">
            <h1 className="font-semibold hover:text-cp-font text-sm">
              About Us
            </h1>
          </Link>
          <Link href="/our-product">
            <h1 className="font-semibold hover:text-cp-font text-sm">
              Products
            </h1>
          </Link>
          <Link href="/our-technology">
            <h1 className="font-semibold hover:text-cp-font text-sm">
              Our Technology
            </h1>
          </Link>
          <Link href="/team">
            <h1 className="font-semibold hover:text-cp-font text-sm">
              Our Team
            </h1>
          </Link>
          <Link href="/contact">
            <h1 className="font-semibold hover:text-cp-font text-sm">
              Contact Us
            </h1>
          </Link>
        </div>

        {/* Login Button and Icons - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="border border-cp-secondary rounded-full p-2 font-semibold text-sm">
            Login/Signup
          </div>
          {/* Vertical line */}
          <div className="h-8 w-px bg-cp-secondary"></div>
          <div className="mr-4">
            <IoSearchOutline className="text-2xl" />
          </div>
          <div className="mr-4">
            <BsHandbag className="text-xl" />
          </div>
        </div>

        {/* Mobile Icons (Search and Bag) */}
        <div className="flex md:hidden items-center space-x-3">
          <div className="">
            <IoSearchOutline className="text-2xl" />
          </div>
          <div className="">
            <BsHandbag className="text-xl" />
          </div>
        </div>
      </div>

      {/* Mobile Menu - Displayed when Hamburger is clicked */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-cp-primary z-40 p-4 border-b-2 border-b-cp-secondary md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/about-us">
              <h1 className="font-semibold text-cp-secondary hover:text-cp-font text-sm">
                About Us
              </h1>
            </Link>
            <Link href="/our-product">
              <h1 className="font-semibold text-cp-secondary hover:text-cp-font text-sm">
                Products
              </h1>
            </Link>
            <Link href="/our-technology">
              <h1 className="font-semibold text-cp-secondary hover:text-cp-font text-sm">
                Our Technology
              </h1>
            </Link>
            <Link href="/team">
              <h1 className="font-semibold text-cp-secondary hover:text-cp-font text-sm">
                Our Team
              </h1>
            </Link>
            <Link href="/contact">
              <h1 className="font-semibold text-cp-secondary hover:text-cp-font text-sm">
                Contact Us
              </h1>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
