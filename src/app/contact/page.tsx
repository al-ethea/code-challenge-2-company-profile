import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <div className="bg-white h-full">
        <div className="bg-[#fbfa97] pt-[70px] mx-4 md:mx-15">
          {/* Breadcrumbs */}
          <div className="breadcrumbs text-sm text-cp-secondary p-3 mx-4 md:mx-10 mt-8">
            <ul>
              <li>
                <Link href="/">Home</Link> {/* Link to the home page */}
              </li>
              <li>
                <span className="font-semibold">Contact Us</span>
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
            <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-cp-font text-cp-font mx-4 md:mx-14 mb-10 w-80 md:w-[1000px]">
              <div className="pt-15 md:pt-30 text-center space-y-2">
                <h1 className="text-sm md:text-md">
                  Jika kamu punya pertanyaan, silakan hubungi kami melalui
                  email:
                </h1>
                <h1 className="text-sm md:text-md font-semibold italic">
                  amaterasunindonesia@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
