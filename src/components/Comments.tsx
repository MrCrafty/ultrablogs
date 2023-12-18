"use client";
import { supabaseClient } from "@/lib/dbClient";
import { AnimatePresence, motion } from "framer-motion";
import { comment } from "postcss";
import React, { useEffect, useState } from "react";

const Comments = ({ blog_id, comments }: any) => {
  const [totalComments, setTotalComments] = useState<number>(5);
  function handleLoadMore() {
    setTotalComments(totalComments + 5);
    setTimeout(() => {
      scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 100);
  }

  return (
    <AnimatePresence>
      <div className="flex gap-5 flex-col mb-5">
        {comments
          ?.reverse()
          ?.slice(0, totalComments)
          .map((comment: any, index: number) => {
            return (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                // animate={{ x: 0, opacity: 1 }}
                transition={{
                  ease: "easeOut",
                  duration: 0.3,
                  delay: index / 15,
                }}
                key={index}
                className={`border-gray-400 py-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4`}
              >
                <h3 className="capitalize text-red-300 text-md">
                  {comment?.user?.user_data?.firstname}{" "}
                  {comment?.user?.user_data?.lastname}
                </h3>
                <p className="text-xl">{comment.comment}</p>
              </motion.div>
            );
          })}
        {totalComments >= comments.length ? (
          ""
        ) : (
          <div className="flex justify-center">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeOut",
                duration: 0.5,
              }}
              className="py-1 bg-black px-3 text-white"
              onClick={() => {
                handleLoadMore();
              }}
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Comments;
