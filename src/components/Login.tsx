"use client";
import { supabaseClient } from "@/lib/dbClient";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";
import { PiUserCircleLight } from "react-icons/pi";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const res = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (res.error) {
      setSubmitting(false);
      window.alert(res.error.message);
    } else {
      router.back();
      router.refresh();
    }
  };
  return (
    <div className="container mx-auto">
      <div>
        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
          className="flex flex-col relative w-11/12 lg:w-3/12 mx-auto p-5 rounded-lg shadow-2xl mt-20 lg:mt-44 border-[1px] gap-y-6"
        >
          <PiUserCircleLight className="text-6xl text-black bg-white absolute -top-8 left-1/2 -translate-x-1/2" />
          <h3 className="text-3xl text-center my-5 text-black">Login</h3>
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
            type="email"
            name="email"
            placeholder="Enter email"
            autoComplete="email"
          />
          <input
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Enter password"
          />
          <button
            type="submit"
            disabled={password != "" && !submitting ? false : true}
            className="hover: w-1/2 mx-auto border-[1px] border-blue-500 py-2 rounded-md hover:bg-blue-500 transition-all disabled:bg-gray-500 disabled:border-none text-black disabled:text-white relative"
          >
            {submitting ? (
              <FiLoader className="text-center w-full" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
