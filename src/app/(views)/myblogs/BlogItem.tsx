"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";

const BlogItem = (data: any) => {
  const [deleting, setDeleting] = useState<boolean>(false);
  const router = useRouter();
  const supabase = createClientComponentClient();
  const handleDelete = async (id: any) => {
    setDeleting(true);
    await supabase
      .from("data")
      .delete()
      .eq("id", id)
      .then(() => {
        router.refresh();
      });
  };
  return (
    <div className="border-b-2 py-2 flex justify-between">
      <div>
        <h1 className="text-4xl text-text-semibold my-4">
          <Link
            className="hover:text-red-300 transition-all"
            href={`/blogs/${data.data?.id}`}
          >
            {data.data?.title}
          </Link>
        </h1>
        <div className="flex mb-4">
          <p>Tags: </p>
          {data.data?.categories?.map((item: string, index: number) => (
            <p
              className={`px-3 text-gray-500 ${
                index > 0 ? "border-black border-s-[1px]" : ""
              }`}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
        <p className="text-gray-300 text-sm">
          {data.data?.inserted_at.slice(0, 10)}
        </p>
      </div>
      <div className="flex flex-col justify-center items-end">
        <button
          onClick={() => handleDelete(data?.data?.id)}
          disabled={deleting}
          className={`hover:bg-red-500 transition-all hover:text-white flex items-center border-red-500 border-[1px] rounded-md py-2 px-4 ${
            deleting ? "bg-red-800 cursor-none" : ""
          }`}
        >
          {deleting ? (
            <FiLoader className="text-center w-full text-white" />
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
