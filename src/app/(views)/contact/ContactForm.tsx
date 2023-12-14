"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiLoader } from "react-icons/fi";

const ContactForm = () => {
  const [submitting, setSubmitting] = useState<boolean>();
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_k5kxf4h",
        "template_vr4etxm",
        e.target,
        "29KaAW1qnAzeszPGn"
      )
      .then(
        () => {
          window.location.replace("/thankyou");
        },
        (err) => {
          console.log(err);
          setSubmitting(false);
        }
      );
  };
  return (
    <div className="container mx-auto ">
      <form
        className="flex flex-col relative w-5/12 mx-auto p-10 rounded-lg shadow-2xl mt-44 border-[1px] gap-y-10"
        onSubmit={sendEmail}
      >
        <label className="absolute -top-5 left-5 bg-white text-3xl">
          Contact Form
        </label>
        <input
          required
          className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
          type="text"
          name="from_name"
          placeholder="Enter Name"
        />
        <input
          required
          className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
          type="email"
          name="from_email"
          placeholder="Enter Email"
        />
        <input
          required
          className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
          type="text"
          name="subject"
          placeholder="Enter Subject"
        />
        <textarea
          required
          name="message"
          placeholder="Reason to Contact"
          className="px-3 py-1 text-xl bg-transparent outline-none border-b-[1px] text-black"
        />
        <button
          type="submit"
          className="hover: w-1/2 mx-auto border-[1px] border-blue-500 py-2 rounded-md hover:bg-blue-500 transition-all disabled:bg-gray-500 disabled:border-none text-black disabled:text-white relative"
          onClick={() => {
            setSubmitting(true);
          }}
        >
          {submitting ? <FiLoader className="text-center w-full" /> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
