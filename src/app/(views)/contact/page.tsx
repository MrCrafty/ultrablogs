import React from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const DynamicForm = dynamic(() => import("./ContactForm"), {
  loading: () => <Loading />,
});

const Page = () => {
  return (
    <div>
      <DynamicForm />
    </div>
  );
};

export default Page;
