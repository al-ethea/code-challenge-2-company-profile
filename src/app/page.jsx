"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const testimonialList = [
    {
      job: "Athlete",
      message:
        "I absolutely love the sunscreen! It’s my new favorite. My skin feels great and protected.",
    },
    {
      job: "Beauty Blogger",
      message:
        "This sunscreen is fantastic! It doesn't leave a greasy feeling, and I love how it protects my skin all day long.",
    },
    {
      job: "Model",
      message:
        "I’ve been using Amaterasun for a month now, and my skin has never felt better! It's not only a sunscreen, it's a skincare product.",
    },
  ];

  const [testimonial, setTestimonial] = useState([]);
  const handleGetTestimonials = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=3");
      setTestimonial(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetTestimonials();
  }, []);

  return (
    <div className="bg-white h-full w-screen">
      <div className="pt-[65px] md:pt-[70px]">
        {/* Banner Image */}
        <div>
          <Image
            src="/amaterasun_banner.jpg"
            alt="banner"
            height={200}
            width={1300}
            className="w-full object-cover"
          />
        </div>

        {/* Best Seller Products */}
        <div className="p-5 pl-4 md:pl-16 md:space-x-3">
          <h1 className="text-cp-secondary didact-gothic-regular font-bold text-xl md:text-2xl">
            Best Seller of Amaterasun
          </h1>
          <div className="flex flex-col md:flex-row justify-between px-4 mb-5 space-y-2 md:gap-3">
            {/* Product 1 */}
            <Link href="/our-product">
              <div className="cursor-pointer w-full md:w-60">
                <div className="relative h-60 w-full">
                  <Image
                    src="/Physical_Sunscreen.png"
                    alt="Physical_Sunscreen.png"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 w-full md:w-[90%]">
                  <h1 className="text-black text-xl md:text-xl font-semibold">
                    Amaterasun Physical Sunscreen SPF 50+ PA++++
                  </h1>
                  <div className="text-cp-secondary text-lg md:text-xl font-semibold">
                    Rp 99.000
                  </div>
                </div>
              </div>
            </Link>

            {/* Product 2 */}
            <Link href="/our-product">
              <div className="cursor-pointer w-full md:w-60">
                <div className="relative h-60 w-full">
                  <Image
                    src="/UV_Skin_Tint.png"
                    alt="UV_Skin_Tint.png"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 w-full md:w-[90%]">
                  <h1 className="text-black text-xl md:text-xl font-semibold">
                    UV Skin Tint SPF 35 PA ++++ 25gr
                  </h1>
                  <div className="text-cp-secondary text-lg md:text-xl font-semibold">
                    Rp 89.000
                  </div>
                </div>
              </div>
            </Link>

            {/* Product 3 */}
            <Link href="/our-product">
              <div className="cursor-pointer w-full md:w-60">
                <div className="relative h-60 w-full">
                  <Image
                    src="/Lip_Gloss.png"
                    alt="Lip_Gloss.png"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 w-full md:w-[90%]">
                  <h1 className="text-black text-xl md:text-xl font-semibold">
                    Amaterasun Lip Gloss SPF 29 PA++++
                  </h1>
                  <div className="text-cp-secondary text-lg md:text-xl font-semibold">
                    Rp 69.000
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Banner Text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 flex flex-col items-center justify-center bg-[#fbfa97] h-full px-4 py-8 md:py-0 order-2 md:order-1">
            <div className="text-cp-font text-3xl md:text-6xl text-center space-y-5">
              <h1>It's more than just</h1>
              <h1 className="font-semibold">SUNSCREEN</h1>
              <h1>that we are called</h1>
              <h1 className="font-semibold">SPF Specialist</h1>
            </div>
            <button className="btn bg-white text-cp-primary rounded-full border-cp-secondary shadow-md hover:shadow-lg transition-all mt-10 md:mt-16">
              <Link href="/our-technology">READ MORE</Link>
            </button>
          </div>

          <div className="col-span-1 relative w-full order-1 md:order-2">
            <Image
              src="/banner_640x655.jpg"
              alt="banner"
              width={640} // Set the original width of the image
              height={655} // Set the original height of the image
              className="object-contain w-full h-auto" // Use object-contain and let height adjust automatically
            />
          </div>
        </div>

        {/* About Us Section */}
        <div className="about-us-section py-16 bg-cp-font shadow-lg">
          <div className="text-center space-y-6 max-w-4xl mx-auto px-4">
            <h1 className="text-cp-primary text-2xl md:text-3xl font-semibold mb-4">
              About Us
            </h1>
            <p className="text-base md:text-lg font-medium text-[#fbfa97] mx-4 md:mx-8">
              Amaterasun is dedicated to creating eco-friendly, high-quality
              sunscreens that not only protect your skin but also nourish it.
              Our mission is to provide products that offer the best protection
              against harmful UV rays while supporting sustainability and
              environmental awareness.
            </p>
            <button className="btn bg-white text-cp-secondary rounded-full border-cp-secondary shadow-md hover:shadow-lg transition-all mt-8 md:mt-16">
              <Link href="/about-us">READ MORE</Link>
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonial-section py-16">
          <h1 className="text-cp-secondary text-center text-xl md:text-2xl font-semibold mb-8">
            What Our Customers Are Saying
          </h1>
          {!testimonial || testimonial.length === 0 ? (
            <div className="flex justify-center items-center mb-8">
              <span className="loading loading-spinner loading-md text-cp-secondary"></span>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 px-4">
              {testimonial.map((person, index) => (
                <div
                  key={index}
                  className="testimonial-card bg-[#fbfa97] p-6 rounded-lg shadow-lg w-full sm:w-[250px] text-center"
                >
                  <img
                    src={person.picture.large}
                    alt={person.name.first}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold text-cp-secondary">
                    {person.name.first} {person.name.last}
                  </h3>
                  <p className="text-base font-semibold text-cp-font mb-2">
                    {testimonialList[index].job}
                  </p>
                  <p className="text-sm italic text-cp-font">
                    "{testimonialList[index].message}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
