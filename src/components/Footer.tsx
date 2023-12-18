import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between gap-5 container border-t-2 py-5 items-center px-3">
      <p>&#169; www.ultrablogs.in</p>
      <Link href={"/contact"} className="text-lg">
        Contact Us
      </Link>
    </div>
  );
};

export default Footer;
