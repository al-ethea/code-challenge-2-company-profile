import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
  return (
    <div className="bg-white h-full w-screen">
      <div className="pt-[70px]">
        {/* Banner Image */}
        <div className="">
          <Image
            src="/AMATERASUN_WEBSITE_CATEGORIES_BANNER.png"
            alt="AMATERASUN_WEBSITE_CATEGORIES_BANNER.png"
            height={200}
            width={1300}
            className="object-contain object-center w-full"
          />
        </div>

        {/* Logo and Hashtag Section */}
        <div className="bg-cp-primary flex items-center justify-center flex-wrap p-2 space-x-4 md:space-x-20">
          {/* Display only one item on mobile */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              height={30}
              width={30}
              className="w-6 h-6 md:w-8 md:h-8"
            />
            <h1 className="text-cp-font font-semibold text-sm md:text-md ml-2">
              #SPFSpecialist
            </h1>
          </div>

          {/* Display additional items on desktop */}
          {[...Array(4)].map((_, index) => (
            <React.Fragment key={index}>
              <div className="hidden md:flex items-center">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  height={30}
                  width={30}
                  className="w-6 h-6 md:w-8 md:h-8"
                />
                <h1 className="text-cp-font font-semibold text-sm md:text-md ml-2">
                  #SPFSpecialist
                </h1>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Breadcrumbs */}
        <div className="mx-4 md:mx-15 mt-8">
          <div className="breadcrumbs text-sm text-cp-secondary p-3 mx-4 md:mx-10 mt-8">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span className="font-semibold">Products</span>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="p-3 pt-14">
            <h1 className="text-cp-secondary font-semibold text-2xl">
              Products (8)
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5 mt-8">
              {/* Product 1 */}
              <div className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60 md:h-80 md:w-80">
                    <Image
                      src="/Lip_Gloss.png"
                      alt="Lip_Gloss.png"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-black text-xl md:text-2xl w-90 font-semibold mt-4">
                  Amaterasun Lip Gloss SPF 29 PA++++
                </h1>
                <div className="text-cp-secondary text-lg md:text-xl font-semibold mt-3">
                  Rp 69.000
                </div>
              </div>

              {/* Product 2 */}
              <div className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60 md:h-80 md:w-80">
                    <Image
                      src="/UV_Skin_Tint.png"
                      alt="UV_Skin_Tint.png"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-black text-xl md:text-2xl w-90 font-semibold mt-4">
                  UV Skin Tint SPF 35 PA ++++ 25gr
                </h1>
                <div className="text-cp-secondary text-lg md:text-xl font-semibold mt-3">
                  Rp 89.000
                </div>
              </div>

              {/* Product 3 */}
              <div className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60 md:h-80 md:w-80">
                    <Image
                      src="/Lip_Balm_SPF_20.png"
                      alt="Lip_Balm_SPF_20.png"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-black text-xl md:text-2xl w-90 font-semibold mt-4">
                  Amaterasun Lip Balm SPF 20 PA+++
                </h1>
                <div className="text-cp-secondary text-lg md:text-xl font-semibold mt-3">
                  Rp 39.000
                </div>
              </div>

              {/* Product 4 */}
              <div className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60 md:h-80 md:w-80">
                    <Image
                      src="/Transparent_Sunscreen_Moisturizer_SPF_43_PA+++.png"
                      alt="Transparent_Sunscreen_Moisturizer_SPF_43_PA+++.png"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-black text-xl md:text-2xl w-90 font-semibold mt-4">
                  AMATERASUN Transparent Sunscreen Moisturizer SPF 43 PA+++
                </h1>
                <div className="text-cp-secondary text-lg md:text-xl font-semibold mt-3">
                  Rp 109.000
                </div>
              </div>

              {/* Product 5 */}
              <div className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60 md:h-80 md:w-80">
                    <Image
                      src="/Physical_Sunscreen.png"
                      alt="Physical_Sunscreen.png"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-black text-xl md:text-2xl w-90 font-semibold mt-4">
                  Amaterasun Physical Sunscreen SPF 50+ PA++++
                </h1>
                <div className="text-cp-secondary text-lg md:text-xl font-semibold mt-3">
                  Rp 99.000
                </div>
              </div>

              {/* Product 6 */}
              <div className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60 md:h-80 md:w-80">
                    <Image
                      src="/UV_Sunscreen_Cream_SPF_50_PA++++.png"
                      alt="UV_Sunscreen_Cream_SPF_50_PA++++.png"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-black text-xl md:text-2xl w-90 font-semibold mt-4">
                  AMATERASUN UV Sunscreen Cream SPF 50+ PA++++
                </h1>
                <div className="text-cp-secondary text-lg md:text-xl font-semibold mt-3">
                  Rp 79.000
                </div>
              </div>

              {/* Product 7 */}
              <div className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60 md:h-80 md:w-80">
                    <Image
                      src="/UV_Sunscreen_Serum_SPF_50_PA_++.png"
                      alt="UV_Sunscreen_Serum_SPF_50_PA_++.png"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-black text-xl md:text-2xl w-90 font-semibold mt-4">
                  AMATERASUN UV Sunscreen Serum SPF 50+ PA++
                </h1>
                <div className="text-cp-secondary text-lg md:text-xl font-semibold mt-3">
                  Rp 92.000
                </div>
              </div>

              {/* Product 8 */}
              <div className="cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="relative h-60 w-60 md:h-80 md:w-80">
                    <Image
                      src="/UV_Body_Sunscreen_SPF_40_PA++.png"
                      alt="UV_Body_Sunscreen_SPF_40_PA++.png"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h1 className="text-black text-xl md:text-2xl w-90 font-semibold mt-4">
                  AMATERASUN UV Body Sunscreen SPF 40 PA++
                </h1>
                <div className="text-cp-secondary text-lg md:text-xl font-semibold mt-3">
                  Rp 132.000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
