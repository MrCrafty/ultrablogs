"use client";
import React, { useEffect, useState } from "react";
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
import ImageInput from "./ImageInput";
import CategoryTab from "./CategoryTab";

const AddBlogForm = () => {
  //Variables
  var d = new Date();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState({ tags: [] });
  const [blog, setBlog] = useState<Block[]>();
  const [submitting, setSubmitting] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string>();
  const [totalCategories, setTotalCategories] = useState<string[]>();
  const [categories, setCategories] = useState<string[]>([]);

  //Data Fetching Functions
  const getCategories = async () => {
    const res: any = await supabaseClient.from("static_data").select("*");
    setTotalCategories(res?.data[0].data.categories);
  };
  useEffect(() => {
    getCategories();
  }, []);
  //Handlers
  const handleFormSuccess = () => {
    alert("Saved Successfully");
    router.push("/blogs");
  };
  const handleCoverImageUpload = async () => {
    if (coverImage != null) {
      const res = await supabaseClient.storage.from("Images").upload(
        `Blog_Cover/cover_${
          (
            await supabaseClient.auth.getSession()
          ).data?.session?.user?.id
        }_${d.getTime()}`,
        //@ts-ignore
        coverImage
      );
      var imgPath = supabaseClient.storage
        .from("Images")
        .getPublicUrl(res.data?.path ?? "");
      return imgPath.data.publicUrl.toString();
    } else {
      return null;
    }
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
    if (categories.length < 1) {
      return alert("Please select atleast 1 category");
    } else if (categories.length > 3) {
      return alert("Max 3 categories can be selected");
    }
    setSubmitting(true);
    const res = await supabaseClient.from("data").insert({
      title: title,
      tags: tags.tags,
      data: blog,
      user_id: (await supabaseClient.auth.getSession()).data.session?.user.id,
      cover_image: await handleCoverImageUpload(),
      categories: categories,
    });
    res.error ? alert(res.error.message) : handleFormSuccess();
  };
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
      var imgPath = supabaseClient.storage
        .from("Images")
        .getPublicUrl(res.data?.path ?? "");

      if (res.error) {
        reject(res.error.message);
      } else {
        resolve(imgPath?.data?.publicUrl);
      }
    });
  };
  const handleCoverPreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      //@ts-ignore
      setCoverImage(e.target.files[0]);
      setCoverImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleCategoryChange = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    var value = e.currentTarget.getAttribute("data-value")?.toString() ?? "";
    var category = categories.indexOf(value);
    if (category > -1) {
      setCategories(categories.filter((c) => c != value));
    } else {
      setCategories([...categories, value]);
    }
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
          <ImageInput
            coverImagePreview={coverImagePreview}
            handleCoverPreview={handleCoverPreview}
          />
        </div>
        <input
          type="text"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="pl-0 w-full focus:outline-none mt-5 px-4 py-2 text-4xl text-black placeholder:text-gray-400"
          placeholder="Enter Blog Title"
        />
        <BlockNoteView
          editor={editor}
          theme={lightDefaultTheme}
          className="border-[1px] py-3 z-0 min-h-[500px]"
        />
        <h2 className="text-2xl mt-5">Please Select Categories: </h2>
        <div className="flex gap-5 mb-5 flex-wrap">
          {totalCategories?.map((cat, index) => {
            return (
              <CategoryTab
                categories={categories}
                category={cat}
                handleCategoryChange={handleCategoryChange}
                key={index}
              />
            );
          })}
        </div>
        <TagsInput
          inputProps={{
            placeholder: "Press enter to add tags",
          }}
          onlyUnique={true}
          value={tags.tags}
          focusedClassName="[&>span>input]:border-black [&>span>input]:border-[1px]"
          className="[&>span>input]:text-sm [&>span>input]:w-7/12 lg:[&>span>input]:w-5/12 lg:[&>span>input]:text-lg focus:outline-none px-3 py-2 bg-transparent border-[1px] border-gray-200 "
          onChange={(e) => setTags({ tags: e })}
        />
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          type="submit"
          disabled={!submitting ? false : true}
          className={` w-2/5 lg:w-1/5 py-2 px-4  text-xl ms-0 me-auto ${
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
