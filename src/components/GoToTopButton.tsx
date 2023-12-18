"use client";

import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const GoToTopButton = () => {
  return (
    <motion.button
      className={`fixed bottom-10 right-10 z-50 lg:bottom-20 lg:right-20 bg-black dark:bg-white dark:text-black text-white p-4 transition-all `}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default GoToTopButton;
