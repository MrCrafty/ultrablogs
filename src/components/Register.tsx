"use client";
import React, { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { FiLoader } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { supabaseClient } from "@/lib/dbClient";

export const metadata: Metadata = {
  title: "Register",
};

const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const login = await supabaseClient.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          firstname: firstname,
          lastname: lastname,
        },
      },
    });
    const handleError = () => {
      setSubmitting(false);
      alert(login?.error?.message);
    };
    const handleRegister = () => {
      router.push("/");
      router.refresh();
    };
    login.error ? handleError() : handleRegister();
  };
  return (
    <div className="container mx-auto">
      <div>
        <form
          onSubmit={(e) => {
            handleFormSubmit(e);
          }}
          className="flex flex-col relative w-11/12 lg:w-3/12 mx-auto p-5 rounded-lg shadow-2xl mt-10 lg:mt-44 border-[1px] gap-y-6"
        >
          <PiUserCircleLight className="text-6xl text-black bg-white absolute -top-8 left-1/2 -translate-x-1/2" />
          <h3 className="text-3xl text-center my-5 text-black">Register</h3>
          <input
            required
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
            type="text"
            name="firstname"
            placeholder="Firstname"
            autoComplete="firstname"
          />
          <input
            required
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
            type="text"
            name="lastname"
            placeholder="Lastname"
            autoComplete="lastname"
          />
          <input
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
            type="email"
            name="email"
            placeholder="Email"
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
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
            type="password"
            name="password"
            autoComplete="confirm-password"
            placeholder="Confirm password"
          />
          <button
            type="submit"
            disabled={
              password == confirmPassword && password != "" && !submitting
                ? false
                : true
            }
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

export default Register;
