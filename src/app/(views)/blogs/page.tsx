import React from "react";
import "@blocknote/core/style.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

export const metadata: Metadata = {
  title: "Blogs | UltraBlogs",
  description: "Blogs",
};

const DynamicBlogList = dynamic(() => import("./BlogList"), {
  loading: () => <Loading />,
});

const Blogs = async () => {
  return (
    <div className="container">
      <div>
        <DynamicBlogList />
      </div>
    </div>
  );
};

export default Blogs;
