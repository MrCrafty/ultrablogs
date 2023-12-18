import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
import { Metadata } from "next";

const DynamicForm = dynamic(() => import("./ContactForm"), {
  loading: () => <Loading />,
});

export const metadata: Metadata = {
  title: "Contact Us",
};

const Page = () => {
  return (
    <div>
      <DynamicForm />
    </div>
  );
};

export default Page;
