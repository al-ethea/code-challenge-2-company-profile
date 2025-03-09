import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
  return (
    <>
      <div className="bg-white h-full">
        <div className="bg-[#fbfa97] pt-[65px] mx-4 md:mx-15">
          {/* Breadcrumbs */}
          <div className="breadcrumbs text-sm text-cp-secondary p-3 mx-4 md:mx-10 mt-8">
            <ul>
              <li>
                <Link href="/home">Home</Link> {/* Link to the home page */}
              </li>
              <li>
                <span className="font-semibold">About Us</span>
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
              {/* Company History Section */}
              <div className="pt-15 md:pt-30 text-center space-y-4 md:space-y-6">
                <h1 className="text-sm">Let&apos;s talk about</h1>
                <h1 className="text-3xl md:text-5xl font-semibold">
                  Our Company History
                </h1>
                <p className="text-sm">
                  Founded in 2015, Amaterasun started with a simple vision: to
                  create high-quality, eco-friendly sunscreen products that
                  provide the best protection against UV rays while also being
                  kind to the environment. Over the years, we&apos;ve expanded
                  and innovated, earning the trust of customers worldwide. Key
                  milestones include launching our first eco-friendly sunscreen
                  in 2016, expanding our product line to include
                  skincare-infused sunscreens in 2020, and achieving carbon
                  neutrality in 2023.
                </p>
              </div>

              {/* Team Section */}
              <div className="pt-6 md:pt-30 text-center space-y-4 md:space-y-6">
                <h1 className="text-sm">Meet</h1>
                <h1 className="text-3xl md:text-5xl font-semibold">
                  Our Dedicated Team
                </h1>
                <div className="text-sm space-y-4">
                  <div>
                    <h1 className="font-semibold">
                      Dr. Emily Stevens - Formulation Scientist
                    </h1>
                    <p>
                      With over 12 years of experience in cosmetic chemistry,
                      Dr. Stevens leads our research and development team,
                      ensuring our products are safe, effective, and advanced in
                      sun protection technology.
                    </p>
                  </div>
                  <div>
                    <h1 className="font-semibold">
                      John Doe - Product Development Specialist
                    </h1>
                    <p>
                      John works tirelessly to transform innovative concepts
                      into real-world products. His expertise in skincare
                      formulation and product development makes him a key player
                      in our team.
                    </p>
                  </div>
                  <div>
                    <h1 className="font-semibold">
                      Sarah Mitchell - Quality Assurance Manager
                    </h1>
                    <p>
                      Sarah ensures that every product we make meets our high
                      standards for safety, consistency, and performance. Her
                      attention to detail is essential in ensuring the quality
                      of every batch.
                    </p>
                  </div>
                  <div>
                    <h1 className="font-semibold">
                      Lisa Johnson - Marketing Strategist
                    </h1>
                    <p>
                      Lisa leads our marketing efforts, ensuring we effectively
                      communicate the benefits of sun protection. Her creative
                      strategies help us connect with our audience and grow our
                      brand.
                    </p>
                  </div>
                  <div>
                    <h1 className="font-semibold">
                      Mark Davidson - Sales Director
                    </h1>
                    <p>
                      Mark oversees our global sales operations, ensuring that
                      Amaterasun products reach customers through various
                      channels worldwide.
                    </p>
                  </div>
                  <div>
                    <h1 className="font-semibold">
                      Michael Lee - Regulatory Affairs Specialist
                    </h1>
                    <p>
                      Michael navigates regulatory landscapes to ensure that our
                      products are compliant with industry standards and safe
                      for use worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Culture Section */}
              <div className="pt-6 md:pt-30 text-center space-y-4 md:space-y-6">
                <h1 className="text-sm">Our Company Culture</h1>
                <h1 className="text-3xl md:text-5xl font-semibold">
                  A Culture of Innovation and Sustainability
                </h1>
                <p className="text-sm">
                  At Amaterasun, we believe in a culture of collaboration,
                  creativity, and sustainability. Our team works together to
                  push the boundaries of sun protection technology, ensuring our
                  customers receive the best products available. We value
                  transparency, diversity, and ethical business practices, which
                  is reflected in our work environment and the products we
                  create.
                </p>
                <h1 className="font-semibold">Our Core Values:</h1>
                <div className="text-sm space-y-2">
                  <p>
                    1. <span className="font-semibold">Innovation:</span>{" "}
                    Continuously improving our products through cutting-edge
                    technology.
                  </p>
                  <p>
                    2. <span className="font-semibold">Sustainability:</span> We
                    are committed to reducing our environmental impact with
                    eco-friendly packaging and ingredients.
                  </p>
                  <p>
                    3. <span className="font-semibold">Integrity:</span> We
                    believe in being transparent and honest with our customers
                    at every step.
                  </p>
                  <p>
                    4. <span className="font-semibold">Customer-Centric:</span>
                    We put our customers at the heart of everything we do,
                    focusing on their needs and preferences.
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
