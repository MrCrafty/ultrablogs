"use client";
import { supabaseClient } from "@/lib/dbClient";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AddCategoryForm = () => {
  const [category, setCategory] = useState("");
  const router = useRouter();
  const handleAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    var res = (await supabaseClient.from("static_data").select("data")).data[0]
      .data.categories;
    var newData = { ...res, categories: category };
    var data = await supabaseClient
      .from("static_data")
      .update({ data: newData });
    if (data.error) {
      alert(data.error.message);
    } else {
      alert("Category Added successfully");
      router.refresh();
    }
  };
  return (
    <form
      onSubmit={(e) => {
        handleAddCategory(e);
      }}
    >
      <input
        type="text"
        className="px-3 py-1 rounded-lg border-2 transition-all border-black"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        placeholder="Add Category"
      />
      <input type="submit" className="hidden" />
    </form>
  );
};

export default AddCategoryForm;
