import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechnologyPage() {
  return (
    <>
      <div className="bg-white h-full w-screen">
        <div className="bg-[#fbfa97] pt-[65px] mx-4 md:mx-15">
          {/* Breadcrumbs */}
          <div className="breadcrumbs text-sm text-cp-secondary p-3 mx-4 md:mx-10 mt-8">
            <ul>
              <li>
                <Link href="/">Home</Link> {/* Link to the home page */}
              </li>
              <li>
                <span className="font-semibold">Our Technology</span>
                {/* Bold "About Us" text */}
              </li>
            </ul>
          </div>

          {/* Logo GIF */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-[200px] w-[250px] md:h-[360px] md:w-[400px] -mt-[30px] md:-mt-[50px] -mb-[100px] md:-mb-[170px]">
              <Image
                src="/Logo_Amaterasun-GIF.gif"
                alt="Logo_Amaterasun-GIF.gif"
                fill
                className="object-contain"
              />
            </div>

            {/* Content Container */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-cp-font text-cp-font mx-4 md:mx-14 mb-10">
              <div className="pt-15 md:pt-30 text-center space-y-4 md:space-y-6">
                <h1 className="text-sm">Let&apos;s talk about</h1>
                <h1 className="text-3xl md:text-5xl font-semibold">
                  Our Technology
                </h1>
                <p className="text-sm">Introducing our technology:</p>
                <h1 className="font-semibold">INTELLIGENT DNA GUARDIAN</h1>
                <p className="text-sm">
                  A technology unique to Amaterasun in all of its products. It
                  contains Ethyl Ferulate & Carnosic Acid, which can protect
                  cells from DNA damage, shield the skin from UV rays & blue
                  light, strengthen the skin barrier, and enhance skin
                  hydration.
                </p>
                <h1 className="font-semibold">
                  WHAT ARE THE EFFECTS OF INTELLIGENT DNA GUARDIAN?
                </h1>
                <div className="text-sm space-y-2">
                  <p>
                    1. Results from in vitro testing with 0.001% Intelligent DNA
                    Guardian show it can repair DNA damage caused by UVB
                    radiation exposure.
                  </p>
                  <p>
                    2. Results from in vitro testing using Immunohistochemistry
                    method dimer tinidin (the tinidin dimer produced is an
                    indicator of DNA damage due to UV rays) show no dimer
                    tinidin was found after 1 hour.
                  </p>
                  <p>
                    3. Results from in vitro testing with 0.05% Intelligent DNA
                    Guardian show it can protect the skin from blue light.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
