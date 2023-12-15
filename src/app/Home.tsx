"use client";
import React from "react";
import CategoryTabs from "./CategoryTabs";

const Home = () => {
  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-5xl border-b-2 border-gray-500 p-2">Explore Blogs</h2>
      <div className="grid-cols-3 grid my-10 gap-5">
        <CategoryTabs
          image={
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Technology"}
        />
        <CategoryTabs
          image={
            "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Science"}
        />
        <CategoryTabs
          image={"https://asset.brandfetch.io/iddWCn9fUD/idmpMGJHi4.jpeg"}
          title={"IITM DS"}
        />
      </div>
    </div>
  );
};

export default Home;
