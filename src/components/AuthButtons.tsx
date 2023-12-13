"use client";
import { supabaseClient } from "@/lib/dbClient";
import { Session } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AuthButtons = ({ session }: { session: Session | null }) => {
  const router = useRouter();
  const [profileOpen, setProfileOpen] = useState(false);
  if (profileOpen) {
    document.body.addEventListener("click", () => {
      setProfileOpen(false);
    });
  } else {
    document.body.removeEventListener("click", () => {
      setProfileOpen(false);
    });
  }
  return (
    <ul className="flex gap-3 relative">
      {session == null ? (
        <>
          <li>
            <Link href="/login">Sign In</Link>
          </li>
          <li>
            <Link href="/register">Sign Up</Link>
          </li>
        </>
      ) : (
        <div className="">
          <li
            className="flex gap-2 cursor-pointer z-50"
            onClick={() => {
              setProfileOpen(!profileOpen);
            }}
          >
            <span className="capitalize ">
              Hi, {session.user.user_metadata["firstname"]}
            </span>
            <IoIosArrowDown className="self-center" />
          </li>
          <li
            className={`flex flex-col w-36 gap-3 absolute left-0 top-12 [&>a]:text-center transition-all bg-gray-300 bg-opacity-50 ${
              profileOpen ? "p-2" : "h-0 p-0 overflow-hidden"
            }  `}
          >
            <button
              onClick={async () => {
                await supabaseClient.auth.signOut();
                router.push("/");
                router.refresh();
              }}
            >
              Sign Out
            </button>
            <a href="/blogs/addblog">Add Blog</a>
            <a href="/myblogs">My Blogs</a>
          </li>
        </div>
      )}
    </ul>
  );
};

export default AuthButtons;
