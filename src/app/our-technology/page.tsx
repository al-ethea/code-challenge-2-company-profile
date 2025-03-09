import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TechnologyPage() {
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
                <h1 className="text-sm">Let's talk about</h1>
                <h1 className="text-3xl md:text-5xl font-semibold">
                  Our Technology
                </h1>
                <p className="text-sm">Memperkenalkan teknologi kami:</p>
                <h1 className="font-semibold">INTELLIGENT DNA GUARDIAN</h1>
                <p className="text-sm">
                  Merupakan teknologi yang hanya dimiliki oleh Amaterasun di
                  setiap produknya. Mengandung Ethyl Ferulate & Carnosic Acid
                  yang mampu memproteksi sel dari kerusakan DNA, melindungi
                  kulit dari sinar UV & blue light, memperkuat skin barrier,
                  meningkatkan hidrasi kulit.
                </p>
                <h1 className="font-semibold">
                  BAGAIMANA DENGAN EFEK DARI INTELLIGENT DNA GUARDIAN?
                </h1>
                <div className="text-sm space-y-2">
                  <p>
                    1. Hasil dari Uji in vitro 0,001% intelligent DNA Guardian
                    mampu memperbaiki kerusakan DNA akibat paparan sinar radiasi
                    UVB.
                  </p>
                  <p>
                    2. Hasil Uji in vitro menggunakan metode Imunohistokimia
                    dimer tinidin (dimier tinidin yang dihasilkan merupakan
                    penanda adanya kerusakan DNA akibat sinar UV) menunjukan
                    bahwa tidak ditemukan hasil dimer tinidin setelah 1 jam.
                  </p>
                  <p>
                    3. Hasil Uji in vitro 0,05% Intelligent DNA Guardian mampu
                    melindungi kulit dari blue light.
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
