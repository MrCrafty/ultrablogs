import React from "react";
import "@blocknote/core/style.css";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import { createServerClient } from "../../../lib/db";

export const metadata: Metadata = {
  title: "Blogs | UltraBlogs",
  description: "Blogs",
};

const DynamicBlogList = dynamic(() => import("./BlogList"), {
  loading: () => <Loading />,
});

const Blogs = async () => {
  const supabase = createServerClient();
  const blogs = await supabase
    .from("data")
    .select("*")
    .order("inserted_at", { ascending: false });
  return (
    <div className="container">
      <div>
        <DynamicBlogList data={blogs.data} />
      </div>
    </div>
  );
};

export default Blogs;
