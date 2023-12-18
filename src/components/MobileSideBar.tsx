"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { FaBarsStaggered } from "react-icons/fa6";
import { supabaseClient } from "@/lib/dbClient";
import { useRouter } from "next/navigation";
import { IoMdHome } from "react-icons/io";

const MobileSideBar = ({ session }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("h-screen");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("h-screen");
    }
  }, [isOpen, ""]);
  return (
    <div className="flex justify-between items-center relative gap-5">
      <button
        onClick={() => {
          setIsOpen(false);
          router.push("/");
          router.refresh();
        }}
      >
        <IoMdHome className="text-2xl" />
      </button>
      <SearchBar />
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FaBarsStaggered className="text-2xl" />
      </button>
      <div
        className={`absolute -right-5 top-full bg-white transition-all ${
          isOpen ? "w-screen" : "w-0"
        } h-screen`}
      >
        <ul
          className={`mt-10 [&>li]:border-2 [&>li]:border-black flex flex-col items-center [&>li]:mb-5 [&>li]:py-3 [&>li]:w-32 text-center  ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <li
            className="bg-blue-950 text-white"
            onClick={() => {
              setIsOpen(false);
              router.push("/blogs");
              router.refresh();
            }}
          >
            Blogs
          </li>
          {session == null ? (
            <>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/login");
                  }}
                >
                  Sign In
                </button>
              </li>
              <li>
                <button
                  onClick={async () => {
                    setIsOpen(false);
                    router.push("/register");
                  }}
                >
                  Sign Up
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={async () => {
                    await supabaseClient.auth.signOut();
                    setIsOpen(false);
                    router.push("/");
                    router.refresh();
                  }}
                >
                  Sign Out
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/blogs/addblog");
                  }}
                >
                  Add Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    router.push("/myblogs");
                  }}
                >
                  My Blogs
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileSideBar;
