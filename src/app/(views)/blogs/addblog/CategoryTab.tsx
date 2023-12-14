"use client";

import React, { useEffect, useState } from "react";

const CategoryTab = ({
  handleCategoryChange,
  category,
}: {
  categories: string[];
  category: string;
  handleCategoryChange: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}) => {
  const handleCategory = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleCategoryChange(e);
    setIsSelected(!IsSelected);
  };
  const [IsSelected, setIsSelected] = useState<boolean>(false);
  return (
    <div
      data-value={category}
      onClick={(e) => {
        handleCategory(e);
      }}
      className={` px-3 py-1 rounded-lg border-2 cursor-pointer transition-all ${
        IsSelected ? " bg-gray-500 border-gray-500 text-white" : "border-black"
      }`}
    >
      {category}
    </div>
  );
};

export default CategoryTab;
