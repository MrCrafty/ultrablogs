import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="mt-20 px-5 w-full flex-col flex justify-center items-center">
      <h1 className="text-5xl">404</h1>
      <p className="text-lg">Page you are looking for is not available.</p>
      <p className="text-2xl">
        Click here to go{" "}
        <Link href={"/"} className="text-blue-500">
          Home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
