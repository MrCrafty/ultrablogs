"use client";
import { BlockNoteEditor } from "@blocknote/core";
import React, { useState } from "react";
import { BlockNoteView } from "@blocknote/react";
import "@blocknote/core/style.css";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/dbClient";
import { VscArrowLeft } from "react-icons/vsc";

const BlogItem = (data: any) => {
  const router = useRouter();
  const [editable, seteditable] = useState(false);
  const [initialData, setInitialData] = useState(data?.data?.data);
  let editor = new BlockNoteEditor({
    initialContent: initialData,
    editable: editable,
  });
  async function handleSave() {
    await supabaseClient
      .from("data")
      .update({ data: editor.topLevelBlocks })
      .eq("id", data?.data?.id)
      .then(() => {
        setInitialData(editor.topLevelBlocks);
        seteditable(false);
      });
  }
  function handleBack() {
    router.back();
  }
  return (
    <div>
      <div className="inline-block mb-5">
        <button
          onClick={() => handleBack()}
          className="text-xl flex items-center gap-2 "
        >
          <VscArrowLeft /> Back
        </button>
      </div>
      <div className="border-b-2 py-2">
        <div className="flex justify-between">
          <h1 className="text-5xl text-text-semibold mb-4">
            {data?.data?.title}
          </h1>
          <p className="text-gray-300 text-sm">
            {data?.data?.inserted_at?.slice(0, 10)}
          </p>
        </div>
        <div className="flex mb-4 justify-between basis-auto">
          <div className="flex ">
            {data?.data?.categories?.map((item: string, index: number) => (
              <p
                className={`px-3 text-red-500 ${
                  index > 0 ? "border-black border-s-[1px]" : ""
                }`}
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="capitalize text-gray-400">
            {data?.user.user_metadata["firstname"] +
              " " +
              data?.user.user_metadata["lastname"]}
          </div>
        </div>
      </div>
      <BlockNoteView editor={editor} theme={"light"} className="my-10" />
      {data?.isEditable ? (
        editable ? (
          <button
            className="bg-green-200 py-1 px-4"
            onClick={() => {
              handleSave();
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-200 py-1 px-4"
            onClick={() => {
              seteditable(true);
            }}
          >
            Edit
          </button>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default BlogItem;
