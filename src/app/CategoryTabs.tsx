"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const CategoryTabs = ({ image, title }: { image: string; title: string }) => {
  const router = useRouter();
  return (
    <div
      className="relative aspect-video overflow-hidden cursor-pointer"
      onClick={() => {
        router.push(`/blogs?category=${title}`);
      }}
    >
      <Image
        alt="Category-Image"
        src={image}
        width={5000}
        height={5000}
        className="aspect-video w-full object-cover"
      />
      <div className="absolute bg-gradient-to-t from-black to-transparent bottom-0 h-3/4 w-full"></div>
      <h2 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-4xl text-white">
        {title}
      </h2>
    </div>
  );
};

export default CategoryTabs;
