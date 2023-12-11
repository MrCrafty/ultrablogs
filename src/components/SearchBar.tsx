"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          query == ""
            ? router.push("/blogs")
            : router.push("/blogs?q=" + query);
        }}
      >
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          className="w-full border-b-2 focus:outline-none text-black placeholder:text-black px-3 py-2"
          placeholder="&#x1F50D; Search Blogs"
        />
        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};

export default SearchBar;
