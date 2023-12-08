"use client";
import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import "./style.css";
import {
  BlockNoteView,
  lightDefaultTheme,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/core/style.css";
import { Block } from "@blocknote/core";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/lib/dbClient";
import { FiLoader } from "react-icons/fi";
import { motion } from "framer-motion";

const AddBlogForm = () => {
  const router = useRouter();
  const handleFormSuccess = () => {
    alert("Saved Successfully");
    router.push("/blogs");
  };
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      tags.tags.length == 0 ||
      editor.topLevelBlocks.length == 1 ||
      title == ""
    ) {
      return alert("Please Enter all the values");
    }
    setSubmitting(true);
    const res = await supabaseClient.from("data").insert({
      title: title,
      categories: tags.tags,
      data: blog,
      user_id: (await supabaseClient.auth.getSession()).data.session?.user.id,
    });
    res.error ? alert(res.error.message) : handleFormSuccess();
  };
  var d = new Date();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState({ tags: [] });
  const [blog, setBlog] = useState<Block[]>();
  const [submitting, setSubmitting] = useState(false);
  const handleImageUpload = async (file: File) => {
    return new Promise<string>(async (resolve, reject) => {
      const res = await supabaseClient.storage
        .from("Images")
        .upload(
          `Blog_Images/${
            (
              await supabaseClient.auth.getSession()
            ).data?.session?.user?.id
          }_${d.getTime()}`,
          file
        );
      console.log(res, "res");
      var imgPath = supabaseClient.storage
        .from("Images")
        .getPublicUrl(res.data?.path ?? "");
      console.log(imgPath, "imgPath");

      if (res.error) {
        reject(res.error.message);
      } else {
        resolve(imgPath?.data?.publicUrl);
      }
    });
  };
  const editor = useBlockNote({
    uploadFile: handleImageUpload,
  });
  editor.onEditorContentChange(async () => {
    setBlog(editor.topLevelBlocks);
  });
  return (
    <div className="w-11/12 lg:w-1/2 mx-auto my-5">
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="flex flex-col gap-3"
      >
        <div className="w-full">
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="pl-0 w-full focus:outline-none px-4 py-2 text-4xl text-black placeholder:text-gray-400"
            placeholder="Enter Blog Title"
          />
        </div>
        <BlockNoteView
          editor={editor}
          theme={lightDefaultTheme}
          className="border-[1px] py-3 z-0 min-h-[500px]"
        />
        <TagsInput
          inputProps={{
            placeholder: "Press enter to add tags",
          }}
          onlyUnique={true}
          value={tags.tags}
          focusedClassName="[&>span>input]:border-black [&>span>input]:border-[1px]"
          className="[&>span>input]:text-sm [&>span>input]:w-5/12 lg:[&>span>input]:text-lg focus:outline-none px-3 py-2 bg-transparent border-[1px] border-gray-200 "
          onChange={(e) => setTags({ tags: e })}
        />
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          type="submit"
          disabled={!submitting ? false : true}
          className={` w-2/5 lg:w-1/5 py-2 px-4  text-xl me-0 ms-auto ${
            submitting ? "bg-green-100 text-black" : " text-white bg-green-500"
          }`}
        >
          {submitting ? <FiLoader className="text-center w-full" /> : "Save"}
        </motion.button>
      </form>
    </div>
  );
};

export default AddBlogForm;
