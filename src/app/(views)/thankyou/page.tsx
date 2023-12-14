"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Thankyou = () => {
  const [count, setCount] = useState(5);
  const router = useRouter();
  setInterval(() => {
    setCount(count - 1);
  }, 1000);
  count == 0 ? router.push("/") : "";
  return (
    <div className="container flex flex-col gap-10">
      <div className="text-3xl">
        Thank you for Contacting Us.You will be redirected to Home in {count}{" "}
        secs.
      </div>
      <p className="text-xl">
        If not redirected,{" "}
        <Link href={"/"} className="text-blue-500">
          Click here
        </Link>
      </p>
    </div>
  );
};

export default Thankyou;
