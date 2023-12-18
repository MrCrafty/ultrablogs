import Loading from "@/app/loading";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

const DynamicRegister = dynamic(() => import("../../../components/Register"), {
  loading: () => <Loading />,
});

export const metadata: Metadata = {
  title: "Register",
  description: "Register page",
};
const page = () => {
  return (
    <div>
      <DynamicRegister />
    </div>
  );
};

export default page;
