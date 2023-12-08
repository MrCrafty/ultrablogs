"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Home = (data: any) => {
  return (
    <div className="container">
      <h1 className="font-Edu text-6xl">
        {data?.data?.home?.landing_page_text}{" "}
        <strong>{data?.data?.home?.landing_page_name}</strong>
      </h1>
      <div className="mt-10 flex flex-col">
        <div className=" overflow-hidden">
          <span className="group inline-block relative">
            <FaGithub className="group text-7xl" />
            <a
              href={data?.home?.github_link}
              target="_blank"
              className="absolute text-2xl top-4 opacity-0 group-hover:opacity-100 -right-32 group-hover:-right-36 transition-all duration-300"
            >
              {data?.home?.github_text}
            </a>
          </span>
        </div>
        <div className=" overflow-hidden">
          <span className="group inline-block relative">
            <FaLinkedin className="group text-7xl" />
            <a
              href={data?.home?.linkedin_link}
              target="_blank"
              className="absolute text-2xl top-4 opacity-0 group-hover:opacity-100 -right-32 group-hover:-right-36 transition-all duration-300"
            >
              {data?.home?.linkedin_text}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
