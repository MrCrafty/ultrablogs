"use client";

import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const GoToTopButton = () => {
  return (
    <motion.button
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
      className={`fixed bottom-20 right-20 bg-black text-white p-4 transition-all`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <FaArrowUp />
    </motion.button>
  );
};

export default GoToTopButton;
