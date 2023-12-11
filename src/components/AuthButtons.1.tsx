"use client";
import { supabaseClient } from "@/lib/dbClient";
import { Session } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const AuthButtons = ({ session }: { session: Session | null }) => {
  const router = useRouter();
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
        <div>
          <li>
            Hi,{" "}
            <span className="capitalize">
              {session.user.user_metadata["firstname"]}
            </span>
            <span>
              <IoIosArrowDown />
            </span>
          </li>
          <li className="flex flex-col w-36 gap-3 absolute left-0 top-10 [&>a]:text-center p-2 bg-gray-300 bg-opacity-50">
            <button
              onClick={async () => {
                await supabaseClient.auth.signOut();
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
