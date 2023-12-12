"use client";
import { supabaseClient } from "@/lib/dbClient";
import React, { useEffect, useState } from "react";

const Comments = ({ blog_id, comments }: any) => {
  return (
    <div>
      {comments?.reverse()?.map((comment: any, index: number) => {
        console.log(comment);
        return (
          <div
            key={index}
            className={` border-black py-5 ${index == 0 ? "" : "border-t-2"}`}
          >
            <h3 className="capitalize text-red-400 text-md">
              {comment?.user?.user_data?.firstname}{" "}
              {comment?.user?.user_data?.lastname}
            </h3>
            <p className="text-xl">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
