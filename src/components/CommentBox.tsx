"use client";

import { supabaseClient } from "@/lib/dbClient";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiLoader } from "react-icons/fi";

const CommentBox = ({ user, blog_id }: any) => {
  const [comment, setComment] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const handleComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const comments: Object[] = (
      await supabaseClient
        .from("data")
        .select("comments")
        .eq("id", blog_id)
        .limit(1)
        .single()
    ).data?.comments;
    comments.push({
      user: {
        id: user.id,
        user_data: user.user_metadata,
      },
      comment: comment,
    });
    const res = await supabaseClient
      .from("data")
      .update({ comments: comments })
      .eq("id", blog_id)
      .then(() => {
        setComment("");
        setSubmitting(false);
        location.reload();
      });
  };
  if (user == null) {
    return (
      <p className="my-5">
        <Link href={"/login"} className="text-blue-300">
          Sign In
        </Link>{" "}
        to Add Comment
      </p>
    );
  }
  return (
    <div className="py-5">
      <form
        onSubmit={(e) => {
          handleComment(e);
        }}
      >
        <textarea
          name="comments"
          className="w-full border-2 h-40 p-3"
          value={comment}
          placeholder="Add a Comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></textarea>
        <div className="flex justify-end mt-1">
          <button
            type="submit"
            disabled={comment != "" && !submitting ? false : true}
            className="border-[1px] bg-green-300  rounded-md hover:bg-green-500 transition-all disabled:bg-gray-500 disabled:border-none text-black disabled:text-white relative py-1 px-4"
          >
            {submitting ? <FiLoader className="text-center w-full" /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommentBox;
