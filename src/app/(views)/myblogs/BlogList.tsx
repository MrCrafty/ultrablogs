"use client";
import React from "react";
import BlogItem from "./BlogItem";

const BlogList = (data: any) => {
  return (
    <div>
      {data?.data?.data?.map((data: any, index: number) => {
        return <BlogItem data={data} key={index} />;
      })}
    </div>
  );
};

export default BlogList;
