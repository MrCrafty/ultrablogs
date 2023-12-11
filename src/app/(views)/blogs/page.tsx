import React from "react";
import BlogList from "./BlogList";
import { redirect } from "next/navigation";
import "@blocknote/core/style.css";
import { createServerClient } from "@/lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs",
};

const Blogs = async () => {
  const {
    data: { session },
  } = await createServerClient().auth.getSession();
  return (
    <div className="container">
      <div>
        <BlogList />
      </div>
    </div>
  );
};

export default Blogs;
