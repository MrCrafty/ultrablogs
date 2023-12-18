"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="mt-20 px-5 w-full flex-col flex justify-center items-center">
      <h1 className="text-5xl">404</h1>
      <p className="text-lg">Page you are looking for is not available.</p>
      <p className="text-2xl">
        Click here to go{" "}
        <em
          className="text-blue-500 cursor-pointer"
          onClick={() => {
            router.push("/");
            router.refresh();
          }}
        >
          Home
        </em>
      </p>
    </div>
  );
};

export default NotFound;
