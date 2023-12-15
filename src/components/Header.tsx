import React from "react";
import AuthButtons from "./AuthButtons";
import Link from "next/link";
import { createServerClient } from "@/lib/db";
import SearchBar from "./SearchBar";

const Header = async () => {
  const {
    data: { session },
  } = await createServerClient().auth.getSession();

  return (
    <div className="border-b-2 border-gray-300 shadow-xl w-full fixed top-0 left-0 bg-white px-5 z-50">
      <div className="py-4 container mx-auto">
        <div className="flex justify-between items-center text-xl">
          <ul className="flex gap-3">
            <li>
              <Link className="cursor-pointer" href="/">
                Home
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
