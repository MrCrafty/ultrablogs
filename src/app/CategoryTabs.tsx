"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowForwardOutline } from "react-icons/io5";

const CategoryTabs = ({
  image,
  title,
  imageRight = false,
}: {
  image: string;
  title: string;
  imageRight?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/blogs?category=${title}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`flex justify-between items-center relative text-black gap-10 group ${
        imageRight ? "flex-row-reverse" : ""
      }`}
    >
      <div className="absolute -z-10 opacity-10 right-0 top-0 w-1 duration-300 transition-all group-hover:w-full h-full bg-gray-500"></div>
      <div className="w-1/2">
        <Image
          alt="Category-Image"
          src={image}
          width={5000}
          height={5000}
          className="aspect-video w-full object-cover transition-all z-10"
        />
      </div>
      <div
        className={`w-full relative flex pl-28 text-center text-6xl cursor-pointer`}
      >
        <h2>{title}</h2>
        <IoArrowForwardOutline className="opacity-0 group-hover:opacity-100 ml-0 group-hover:ml-10 transition-all" />
      </div>
    </div>
  );
};

export default CategoryTabs;
