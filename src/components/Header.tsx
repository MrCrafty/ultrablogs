import React from "react";
import AuthButtons from "./AuthButtons";
import Link from "next/link";
import { createServerClient } from "@/lib/db";
import SearchBar from "./SearchBar";
import MobileSideBar from "./MobileSideBar";

const Header = async () => {
  const {
    data: { session },
  } = await createServerClient().auth.getSession();

  return (
    <div className="border-b-2 border-gray-300 shadow-xl w-full fixed top-0 left-0 bg-white bg-opacity-100 px-5 z-50 py-3">
      <div className=" container mx-auto">
        <div className="lg:text-2xl md:hidden">
          <MobileSideBar session={session} />
        </div>
        <div className="justify-between items-center lg:text-xl hidden md:flex ">
          <ul className="flex gap-5 items-center">
            <li>
              <Link
                className="cursor-pointer font-DanceScript text-4xl"
                href="/"
              >
                UltraBlogs.in
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" href="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
          <ul className="w-1/2">
            <li>
              <SearchBar />
            </li>
          </ul>
          <AuthButtons session={session} />
        </div>
      </div>
    </div>
  );
};

export default Header;
