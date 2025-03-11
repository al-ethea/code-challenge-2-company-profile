"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const expertiseList = [
    "Formulation Scientist",
    "Product Development Specialist",
    "Quality Assurance Manager",
    "Marketing Strategist",
    "Sales Director",
    "Regulatory Affairs Specialist",
  ];

  const [team, setTeam] = useState([]);

  const handleGetTeam = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=6");
      setTeam(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetTeam();
  }, []);

  return (
    <>
      <div className="bg-white h-full text-cp-font w-screen">
        <div className="bg-[#fbfa97] pt-[70px] mx-4 md:mx-15 h-full">
          {/* Breadcrumbs */}
          <div className="breadcrumbs text-sm text-cp-secondary p-3 mx-4 md:mx-10 mt-8">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span className="font-semibold">Our Team</span>
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
            <div className="bg-white rounded-3xl p-6 md:p-8 border-2 border-cp-font text-cp-font mx-4 md:mx-14 mb-10 w-full md:w-[1000px]">
              <div className="pt-15 md:pt-30 text-center space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-5xl font-semibold">Our Team</h1>
                <h1 className="p-3 pb-5 text-lg md:text-xl font-medium text-cp-secondary">
                  Meet the team behind Amaterasun
                </h1>

                {/* Loading Spinner */}
                {!team || team.length === 0 ? (
                  <div className="flex justify-center items-center mb-8">
                    <span className="loading loading-spinner loading-xl text-cp-secondary"></span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {team?.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center bg-white shadow-lg rounded-lg p-5 hover:scale-105 transform transition-all max-h-[250px] min-h-[250px]"
                      >
                        {/* Team Member Avatar */}
                        <div className="avatar mb-4">
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-cp-font">
                            <img
                              src={item.picture.large}
                              alt="team member"
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>

                        {/* Team Member Details */}
                        <div className="text-cp-secondary text-center space-y-2">
                          <h3 className="text-lg font-semibold text-cp-font">
                            {item.name.first} {item.name.last}
                          </h3>
                          <p className="text-md font-semibold mt-2">
                            {expertiseList[index]}
                          </p>
                          <p className="text-sm md:text-md">{item.email}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
