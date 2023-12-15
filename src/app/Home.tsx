"use client";
import React from "react";
import CategoryTabs from "./CategoryTabs";

const Home = () => {
  return (
    <div className="container mx-auto mt-5 px-3 lg:p-0">
      <h2 className="text-3xl lg:text-5xl border-b-2 border-gray-500 p-2">
        Explore Blogs
      </h2>
      <div className="grid-cols-1 lg:grid-cols-3 grid my-10 gap-5 ">
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
        <CategoryTabs
          image={
            "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Medical"}
        />
        <CategoryTabs
          image={
            "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Health"}
        />
        <CategoryTabs
          image={
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Travel"}
        />
        <CategoryTabs
          image={
            "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          title={"Financing"}
        />
      </div>
    </div>
  );
};

export default Home;
