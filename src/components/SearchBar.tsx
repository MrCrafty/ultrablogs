"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  return (
    <div>
      <form
        className="flex "
        onSubmit={(e) => {
          e.preventDefault();
          query == ""
            ? router.push("/blogs")
            : router.push("/blogs?q=" + query);
        }}
      >
        <input
          required
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          className="w-full border-b-2 focus:outline-none text-black placeholder:text-black px-3 py-2"
          placeholder="Search Blogs"
        />
        <input
          type="submit"
          className="lg:hidden border-gray-300 border-2 px-3 rounded-full"
          value="&#x1F50D;"
        />
      </form>
    </div>
  );
};

export default SearchBar;
