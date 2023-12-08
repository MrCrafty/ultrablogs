"use client";

import React from "react";
import { InfinitySpin } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <InfinitySpin width="200" color="#000" />
    </div>
  );
};

export default Loading;
